//
// a06.js
// Skeleton for CSC444 Assignment 06, Fall 2024
// Joshua A. Levine <josh@arizona.edu>
//
// This file provides the skeleton code for you to write for A06.  
// It provides partial implementations for a number of functions 
// you will implement to visualize scatterplots of the penguins dataset 
// with joint interactions.
//
// Your main task is to complete the functions:
// (1) makeScatterplot(), which is used to generically create plots
// (2) onBrush(), which is the callback used to interact
//
// You will also need to implement the logic for responding to selection
//


////////////////////////////////////////////////////////////////////////
// Global variables for the dataset and brushes

let data = penguins;

// brush1 and brush2 will store the extents of the brushes,
// if brushes exist respectively on scatterplot 1 and 2.
//
// if either brush does not exist, brush1 and brush2 will
// hold the null value.

let brush1 = null;
let brush2 = null;


////////////////////////////////////////////////////////////////////////
// xAccessor and yAccessor allow this to be generic to different data
// fields

function makeScatterplot(sel, xAccessor, yAccessor) {
  const width = 500;
  const height = 500;
  const padding = 40;
  
  // Create SVG
  const svg = sel.append("svg")
    .attr("width", width)
    .attr("height", height);
  
  // Set scales
  const xScale = d3.scaleLinear()
    .domain(d3.extent(data, xAccessor))
    .range([padding, width - padding]);
  
  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yAccessor))
    .range([height - padding, padding]);
  
  // Draw axes
  svg.append("g")
    .attr("transform", `translate(0, ${height - padding})`)
    .call(d3.axisBottom(xScale))
    .append("text")
    .attr("x", width / 2)
    .attr("y", 35)
    .attr("fill", "black")
    .style("text-anchor", "middle")
    .text(xAccessor.name);

  svg.append("g")
    .attr("transform", `translate(${padding}, 0)`)
    .call(d3.axisLeft(yScale))
    .append("text")
    .attr("x", -height / 2)
    .attr("y", -30)
    .attr("transform", "rotate(-90)")
    .attr("fill", "black")
    .style("text-anchor", "middle")
    .text(yAccessor.name);

  // Color scale
  const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
    .domain([...new Set(data.map(d => d.species))]);
  
  // Draw circles
  let circles = svg.append("g")
    .selectAll("circle")
    .data(data)
    .enter().append("circle")
    .attr("cx", d => xScale(xAccessor(d)))
    .attr("cy", d => yScale(yAccessor(d)))
    .attr("r", 5)
    .attr("fill", d => colorScale(d.species))
    .on("click", handleClick);

  // Create brush
  let brush = d3.brush()
    .extent([[0, 0], [width, height]])
    .on("brush", onBrush)
    .on("end", onBrush);

  // Add brush to the SVG
  svg.append("g")
    .attr("class", "brush")
    .call(brush);

  // Return plot object for global use
  return { svg, xScale, yScale, brush, circles };
}


////////////////////////////////////////////////////////////////////////
// Setup plots

let plot1 = makeScatterplot(d3.select("#scatterplot_1"), 
                            d => d.bill_length, 
                            d => d.bill_depth);
let plot2 = makeScatterplot(d3.select("#scatterplot_2"), 
                            d => d.flipper_length, 
                            d => d.body_mass);

plot1.brush.on("brush", updateBrush1).on("end", updateBrush1);
plot2.brush.on("brush", updateBrush2).on("end", updateBrush2);


////////////////////////////////////////////////////////////////////////
// Callback during brushing

function onBrush() {
  let allCircles = d3.select("body").selectAll("circle");
  
  if (brush1 === null && brush2 === null) {
    allCircles.attr("stroke", "none");
    return;
  }

  // Filter selected points
  function isSelected(d) {
    if (brush1 && !isWithinBrush(d, brush1, plot1)) return false;
    if (brush2 && !isWithinBrush(d, brush2, plot2)) return false;
    return true;
  }

  let selected = allCircles.filter(isSelected);

  // Highlight selected points
  selected.attr("stroke", "black").attr("stroke-width", 2);
  allCircles.filter(d => !isSelected(d)).attr("stroke", "none");

  // Display the data of the first selected point in the table (if any)
  if (!selected.empty()) {
    let firstSelectedData = selected.data()[0];
    d3.select("#table-bill_length").text(firstSelectedData.bill_length);
    d3.select("#table-bill_depth").text(firstSelectedData.bill_depth);
    d3.select("#table-flipper_length").text(firstSelectedData.flipper_length);
    d3.select("#table-body_mass").text(firstSelectedData.body_mass);
    d3.select("#table-species").text(firstSelectedData.species);
  } else {
    // Clear table if no selection
    d3.select("#table-bill_length").text("");
    d3.select("#table-bill_depth").text("");
    d3.select("#table-flipper_length").text("");
    d3.select("#table-body_mass").text("");
    d3.select("#table-species").text("");
  }
}


function isWithinBrush(d, brush, plot) {
  let [[x0, y0], [x1, y1]] = brush;
  let x = plot.xScale(d.bill_length);
  let y = plot.yScale(d.bill_depth);
  return x0 <= x && x <= x1 && y0 <= y && y <= y1;
}

////////////////////////////////////////////////////////////////////////
// Click event handler for updating the table

function handleClick(event, d) {
  // Update table values
  d3.select("#table-bill_length").text(d.bill_length);
  d3.select("#table-bill_depth").text(d.bill_depth);
  d3.select("#table-flipper_length").text(d.flipper_length);
  d3.select("#table-body_mass").text(d.body_mass);
  d3.select("#table-species").text(d.species);

  // Reset all circles to original size
  d3.selectAll("circle").attr("r", 5);

  // Highlight selected point in both scatterplots
  d3.selectAll("circle")
    .filter(circleData => circleData === d)
    .attr("r", 8)
    .attr("stroke", "black")
    .attr("stroke-width", 2);
}



////////////////////////////////////////////////////////////////////////
// Update brush functions

function updateBrush1(event) {
  brush1 = event.selection;
  onBrush();
}

function updateBrush2(event) {
  brush2 = event.selection;
  onBrush();
}
