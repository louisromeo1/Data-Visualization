////////////////////////////////////////////////////////////////////////
// Global variables, preliminaries, and helper functions

let svgSize = 490;
let bands = 49;

let xScale = d3.scaleLinear().domain([0, bands]).range([0, svgSize]);
let yScale = d3.scaleLinear().domain([-1, bands - 1]).range([svgSize, 0]);

function createSvg(sel) {
  return sel
    .append("svg")
    .attr("width", svgSize)
    .attr("height", svgSize);
}

function createGroups(data) {
  return function (sel) {
    return sel
      .append("g")
      .selectAll("rect")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", function (d) {
        return "translate(" + xScale(d.Col) + "," + yScale(d.Row) + ")";
      });
  };
}

d3.selection.prototype.callReturn = function (callable) {
  return callable(this);
}

// Helper function to return the pair [min, max] for a cell d.
function gridExtent(d) {
  return [Math.min(d.NW, d.NE, d.SW, d.SE), Math.max(d.NW, d.NE, d.SW, d.SE)];
}

// Polarity function to determine marching squares case
function polarity(d, value) {
  let result = {
    NW: d.NW < value ? 0 : 1,
    NE: d.NE < value ? 0 : 1,
    SW: d.SW < value ? 0 : 1,
    SE: d.SE < value ? 0 : 1,
  };
  result.case = result.SE + result.SW * 2 + result.NE * 4 + result.NW * 8;
  return result;
}

var currentContour;

// Marching Squares Table: Maps cases to their edges
const marchingSquaresTable = {
  0: [], // No contour
  1: [["s", "e"]],
  2: [["w", "s"]],
  3: [["w", "e"]],
  4: [["n", "e"]],
  5: [["n", "s"], ["w", "e"]],
  6: [["n", "s"]],
  7: [["w", "n"]],
  8: [["w", "n"]],
  9: [["n", "s"]],
  10: [["n", "e"], ["w", "s"]],
  11: [["n", "e"]],
  12: [["w", "e"]],
  13: [["w", "s"]],
  14: [["s", "e"]],
  15: [] // No contour
};

function includesOutlineContour(d) {
  let extent = gridExtent(d);
  return currentContour >= extent[0] && currentContour <= extent[1];
}

function includesFilledContour(d) {
  let extent = gridExtent(d);
  return currentContour >= extent[0];
}

// Interpolation helper function
function interpolate(edge, d, value) {
  const interpolators = {
    s: d3.scaleLinear().domain([d.SW, d.SE]).range([0, 10]), // Bottom edge
    w: d3.scaleLinear().domain([d.SW, d.NW]).range([0, 10]), // Left edge
    e: d3.scaleLinear().domain([d.SE, d.NE]).range([0, 10]), // Right edge
    n: d3.scaleLinear().domain([d.NW, d.NE]).range([0, 10]), // Top edge
  };
  return interpolators[edge](value);
}

// Generate outline contours for marching squares
function generateOutlineContour(d) {
  const caseIndex = polarity(d, currentContour).case;
  const segments = marchingSquaresTable[caseIndex];

  if (!segments.length) return ""; // No contour for this case

  const pathSegments = segments.map(([startEdge, endEdge]) => {
    const p1 = [
      interpolate(startEdge, d, currentContour),
      startEdge === "s" || startEdge === "n" ? (startEdge === "s" ? 0 : 10) : interpolate("w", d, currentContour)
    ];
    const p2 = [
      interpolate(endEdge, d, currentContour),
      endEdge === "s" || endEdge === "n" ? (endEdge === "s" ? 0 : 10) : interpolate("w", d, currentContour)
    ];
    return `M${p1[0]},${p1[1]} L${p2[0]},${p2[1]}`;
  });

  return pathSegments.join(" ");
}

// Generate filled contours for marching squares
function generateFilledContour(d) {
  const caseIndex = polarity(d, currentContour).case;
  const segments = marchingSquaresTable[caseIndex];

  if (!segments.length) return ""; // No contour for this case

  const points = [];
  segments.forEach(([startEdge, endEdge]) => {
    points.push([
      interpolate(startEdge, d, currentContour),
      startEdge === "s" || startEdge === "n" ? (startEdge === "s" ? 0 : 10) : interpolate("w", d, currentContour),
    ]);
    points.push([
      interpolate(endEdge, d, currentContour),
      endEdge === "s" || endEdge === "n" ? (endEdge === "s" ? 0 : 10) : interpolate("w", d, currentContour),
    ]);
  });

  return d3.line().curve(d3.curveLinearClosed)(points);
}

////////////////////////////////////////////////////////////////////////
// Plot generation

function createOutlinePlot(minValue, maxValue, steps, sel) {
  let contourScale = d3.scaleLinear().domain([1, steps]).range([minValue, maxValue]);
  for (let i = 1; i <= steps; ++i) {
    currentContour = contourScale(i);
    sel.filter(includesOutlineContour).append("path")
      .attr("d", generateOutlineContour)
      .attr("fill", "none")
      .attr("stroke", "black");
  }
}

function createFilledPlot(minValue, maxValue, steps, sel) {
  let contourScale = d3.scaleLinear().domain([1, steps]).range([minValue, maxValue]);
  for (let i = 1; i <= steps; ++i) {
    currentContour = contourScale(i);
    sel.filter(includesFilledContour).append("path")
      .attr("d", generateFilledContour)
      .attr("fill", d3.interpolateViridis(i / steps))
      .attr("stroke", "none");
  }
}

// Use precomputed temperatureCells and pressureCells
let plot1T = d3.select("#plot1-temperature").callReturn(createSvg).callReturn(createGroups(temperatureCells));
let plot1P = d3.select("#plot1-pressure").callReturn(createSvg).callReturn(createGroups(pressureCells));
let plot2T = d3.select("#plot2-temperature").callReturn(createSvg).callReturn(createGroups(temperatureCells));
let plot2P = d3.select("#plot2-pressure").callReturn(createSvg).callReturn(createGroups(pressureCells));

// Generate outline and filled plots
createOutlinePlot(-70, -60, 10, plot1T);
createOutlinePlot(-500, 200, 10, plot1P);
createFilledPlot(-70, -60, 10, plot2T);
createFilledPlot(-500, 200, 10, plot2P);
