// Louis Romeo
// CSC 444 Assignment 8
// a08.js
// 11/17/2024
// 
// a08.js
// Template for CSC444 Assignment 08, Fall 2024
// Joshua A. Levine <josh@arizona.edu>
//
// This file provides the template code for A10, providing a skeleton
// for how to initialize and draw tree maps  
//


////////////////////////////////////////////////////////////////////////
// Global variables for the dataset 

// HINT: Start with one of the smaller test datesets included in
// test-cases.js instead of the larger tree in flare.js
//let data = test_1;
//let data = test_2;
let data = flare;

////////////////////////////////////////////////////////////////////////
// Tree related helper functions

function setTreeSize(tree) {
  if (tree.children !== undefined) {
    let size = 0;
    for (let i = 0; i < tree.children.length; ++i) {
      size += setTreeSize(tree.children[i]);
    }
    tree.size = size;
  }
  return tree.size;
}

function setTreeCount(tree) {
  if (tree.children !== undefined) {
    let count = 0;
    for (let i = 0; i < tree.children.length; ++i) {
      count += setTreeCount(tree.children[i]);
    }
    tree.count = count;
  }
  if (tree.children === undefined) {
    tree.count = 1;
  }
  return tree.count;
}

function setTreeDepth(tree, depth) {
  tree.depth = depth;
  let maxDepth = depth;
  if (tree.children !== undefined) {
    for (let i = 0; i < tree.children.length; ++i) {
      maxDepth = Math.max(maxDepth, setTreeDepth(tree.children[i], depth + 1));
    }
  }
  return maxDepth;
}

// Initialize the size, count, and depth variables within the tree
setTreeSize(data);
setTreeCount(data);
let maxDepth = setTreeDepth(data, 0);

////////////////////////////////////////////////////////////////////////
// Squarified Treemap Implementation

function setSquarifiedRectangles(rect, tree, attrFun) {
  if (!tree.children || tree.children.length === 0) {
    tree.rect = rect;
    return;
  }

  const totalSize = tree.children.reduce((sum, child) => sum + attrFun(child), 0);
  const rows = [];
  let row = [];
  let rowSize = 0;
  let remainingRect = { ...rect };

  for (const child of tree.children) {
    const childSize = attrFun(child);
    if (row.length === 0 || isAspectRatioBetter(row, rowSize, childSize, remainingRect, attrFun)) {
      row.push(child);
      rowSize += childSize;
    } else {
      layoutRow(row, rowSize, remainingRect, attrFun);
      row = [child];
      rowSize = childSize;
    }
  }

  if (row.length > 0) {
    layoutRow(row, rowSize, remainingRect, attrFun);
  }

  for (const child of tree.children) {
    setSquarifiedRectangles(child.rect, child, attrFun);
  }
}

function isAspectRatioBetter(row, rowSize, childSize, rect, attrFun) {
  const rowWidth = rect.x2 - rect.x1;
  const rowHeight = rect.y2 - rect.y1;

  const newRowSize = rowSize + childSize;
  const oldAspectRatio = calculateAspectRatio(row, rowSize, rowWidth, rowHeight, attrFun);
  const newAspectRatio = calculateAspectRatio([...row, { size: childSize }], newRowSize, rowWidth, rowHeight, attrFun);

  return newAspectRatio < oldAspectRatio;
}

function calculateAspectRatio(row, rowSize, rowWidth, rowHeight, attrFun) {
  const totalRowArea = row.reduce((sum, child) => sum + attrFun(child), 0);
  const areaPerUnit = totalRowArea / rowSize;
  const width = areaPerUnit * rowWidth;
  const height = rowHeight / row.length;
  return Math.max(width / height, height / width);
}

function layoutRow(row, rowSize, rect, attrFun) {
  const isHorizontal = (rect.x2 - rect.x1) > (rect.y2 - rect.y1);
  const totalSize = row.reduce((sum, child) => sum + attrFun(child), 0);
  const scale = totalSize / (isHorizontal ? (rect.x2 - rect.x1) : (rect.y2 - rect.y1));
  let offset = isHorizontal ? rect.x1 : rect.y1;

  for (const child of row) {
    const normalizedSize = attrFun(child) / scale;
    if (isHorizontal) {
      child.rect = {
        x1: offset,
        x2: offset + normalizedSize,
        y1: rect.y1,
        y2: rect.y2,
      };
      offset += normalizedSize;
    } else {
      child.rect = {
        x1: rect.x1,
        x2: rect.x2,
        y1: offset,
        y2: offset + normalizedSize,
      };
      offset += normalizedSize;
    }
  }

  if (isHorizontal) {
    rect.y1 += totalSize / scale;
  } else {
    rect.x1 += totalSize / scale;
  }
}

////////////////////////////////////////////////////////////////////////
// Visual Encoding portion

let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

setRectangles(
  { x1: 0, y1: 0, x2: winWidth, y2: winHeight }, data,
  function (t) { return t.size; }
);

let treeNodeList = [];
function makeTreeNodeList(tree, lst) {
  lst.push(tree);
  if (tree.children !== undefined) {
    for (let i = 0; i < tree.children.length; ++i) {
      makeTreeNodeList(tree.children[i], lst);
    }
  }
}
makeTreeNodeList(data, treeNodeList);

let gs = d3.select("#svg")
  .attr("width", winWidth)
  .attr("height", winHeight)
  .selectAll("g")
  .data(treeNodeList)
  .enter()
  .append("g");

function setAttrs(sel) {
  sel.attr("x", (treeNode) => treeNode.rect.x1)
    .attr("y", (treeNode) => treeNode.rect.y1)
    .attr("width", (treeNode) => treeNode.rect.x2 - treeNode.rect.x1)
    .attr("height", (treeNode) => treeNode.rect.y2 - treeNode.rect.y1)
    .attr("fill", (treeNode) => d3.interpolateCool(treeNode.depth / maxDepth))
    .attr("stroke", "white");
}

gs.append("rect").call(setAttrs);

////////////////////////////////////////////////////////////////////////
// Callbacks for buttons

d3.select("#size").on("click", function () {
  setRectangles(
    { x1: 0, x2: winWidth, y1: 0, y2: winHeight }, data,
    function (t) { return t.size; }
  );
  d3.selectAll("rect").transition().duration(1000).call(setAttrs);
});

d3.select("#count").on("click", function () {
  setRectangles(
    { x1: 0, x2: winWidth, y1: 0, y2: winHeight }, data,
    function (t) { return t.count; }
  );
  d3.selectAll("rect").transition().duration(1000).call(setAttrs);
});

d3.select("#square-size").on("click", function () {
  setSquarifiedRectangles(
    { x1: 0, y1: 0, x2: winWidth, y2: winHeight }, data,
    function (t) { return t.size; }
  );
  d3.selectAll("rect").transition().duration(1000).call(setAttrs);
});

d3.select("#square-count").on("click", function () {
  setSquarifiedRectangles(
    { x1: 0, y1: 0, x2: winWidth, y2: winHeight }, data,
    function (t) { return t.count; }
  );
  d3.selectAll("rect").transition().duration(1000).call(setAttrs);
});