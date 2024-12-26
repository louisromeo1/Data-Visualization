// 
// a07.js
// Template for CSC444 Assignment 07, Fall 2024
// Joshua A. Levine <josh@arizona.edu>
//
// This file provides the template code for A07, providing a skeleton
// for how to initialize and draw the parallel coordinates plot  
//

/*
Author: Louis Romeo
CSC 444 Assignment 7
Date: 11/6/2024
a07.js
*/

////////////////////////////////////////////////////////////////////////
// Global variables for the dataset 

let data = iris;  // Dataset from iris.js
let dims = ["sepalLength", "sepalWidth", "petalLength", "petalWidth"];  // Quantitative dimensions

let dimNames = {  // Mapping for dimension labels
  "sepalLength": "Sepal Length",
  "sepalWidth": "Sepal Width",
  "petalLength": "Petal Length",
  "petalWidth": "Petal Width",
};

////////////////////////////////////////////////////////////////////////
// SVG Setup

let width = dims.length * 150;
let height = 500;
let padding = 60;

let svg = d3.select("#pcplot")
  .append("svg")
  .attr("width", width + padding * 2).attr("height", height + padding)
  .append("g")
  .attr("transform", `translate(${padding},${padding / 2})`);

////////////////////////////////////////////////////////////////////////
// Initialize scales, axes, brushes for each dimension

let xScale = d3.scalePoint().domain(dims).range([0, width]).padding(0.5);
let yScales = {}, axes = {}, brushes = {}, brushRanges = {};

let colorScale = d3.scaleOrdinal()  // Color mapping for species
  .domain(["setosa", "versicolor", "virginica"])
  .range(["#1f77b4", "#ff7f0e", "#2ca02c"]);

let tooltip = d3.select("body").append("div")  // Tooltip for data display
  .attr("class", "tooltip")
  .style("opacity", 0);

// Initialize yScales, axes, brushes for each dimension
dims.forEach(dim => {
  yScales[dim] = d3.scaleLinear()
    .domain(d3.extent(data, d => d[dim]))
    .range([height, 0]);

  axes[dim] = d3.axisLeft().scale(yScales[dim]).ticks(8);
  
  brushes[dim] = d3.brushY()
    .extent([[-10, 0], [+10, height]])
    .on("brush", updateBrush(dim))
    .on("end", updateBrush(dim));

  brushRanges[dim] = null;  // Initialize brush ranges as null
});

////////////////////////////////////////////////////////////////////////
// Draw Parallel Coordinates Plot

// Define a path function to map each data entry to a line
function path(d) {
  return d3.line()(dims.map(dim => [xScale(dim), yScales[dim](d[dim])]));
}

// Draw paths for each data element
svg.append("g")
  .selectAll(".datapath")
  .data(data)
  .enter()
  .append("path")
  .attr("class", "datapath")
  .attr("d", path)
  .style("stroke", d => colorScale(d.species))
  .style("fill", "none")
  .style("opacity", 0.75)
  .style("stroke-width", 1.5)
  .on("mouseover", function(event, d) {
    tooltip.transition().duration(200).style("opacity", 0.9);
    tooltip.html(
      `<strong>Species:</strong> ${d.species}<br>
      <strong>Sepal Length:</strong> ${d.sepalLength}<br>
      <strong>Sepal Width:</strong> ${d.sepalWidth}<br>
      <strong>Petal Length:</strong> ${d.petalLength}<br>
      <strong>Petal Width:</strong> ${d.petalWidth}`
    )
    .style("left", (event.pageX + 5) + "px")
    .style("top", (event.pageY - 28) + "px");
    d3.select(this).style("stroke-width", 3);  // Highlight on hover
  })
  .on("mouseout", function() {
    tooltip.transition().duration(500).style("opacity", 0);
    d3.select(this).style("stroke-width", 1.5);
  });

// Draw axes
svg.selectAll(".axis")
  .data(dims)
  .enter().append("g")
  .attr("class", "axis")
  .attr("transform", d => `translate(${xScale(d)},0)`)
  .each(function(d) { d3.select(this).call(axes[d]); });

// Add axis labels with interaction
svg.selectAll(".axis")
  .append("text")
  .attr("class", "label")
  .attr("y", -10)
  .attr("text-anchor", "middle")
  .style("font-size", "14px")
  .style("font-weight", "bold")
  .text(d => dimNames[d])
  .on("click", onClick);

// Add brush groups
svg.selectAll(".brush")
  .data(dims)
  .enter()
  .append("g")
  .attr("class", "brush")
  .attr("transform", d => `translate(${xScale(d)},0)`)
  .each(function(d) { d3.select(this).call(brushes[d]); });

////////////////////////////////////////////////////////////////////////
// Interaction Callbacks

// Swap axes on label click
function onClick(event, d) {
  let idx = dims.indexOf(d);
  if (idx < dims.length - 1) {
    [dims[idx], dims[idx + 1]] = [dims[idx + 1], dims[idx]];
  } else if (idx === dims.length - 1) {
    [dims[idx], dims[idx - 1]] = [dims[idx - 1], dims[idx]];
  }

  // Update xScale domain and redraw elements
  xScale.domain(dims);

  svg.selectAll(".axis")
    .transition().duration(1000)
    .attr("transform", d => `translate(${xScale(d)},0)`);

  svg.selectAll(".brush")
    .transition().duration(1000)
    .attr("transform", d => `translate(${xScale(d)},0)`);

  svg.selectAll(".datapath")
    .transition().duration(1000)
    .attr("d", path);
}

// Update brush ranges and filter data paths
function updateBrush(dim) {
  return function(event) {
    brushRanges[dim] = event.selection;
    onBrush();
  };
}

// Filter data paths based on brush ranges
function onBrush() {
  let allLines = svg.selectAll(".datapath");

  function isSelected(d) {
    return dims.every(dim => {
      let range = brushRanges[dim];
      return !range || 
             (yScales[dim](d[dim]) >= range[0] && yScales[dim](d[dim]) <= range[1]);
    });
  }

  let anyBrushActive = dims.some(dim => brushRanges[dim] !== null);
  allLines.style("opacity", d => (anyBrushActive ? (isSelected(d) ? 0.75 : 0.1) : 0.75));
}