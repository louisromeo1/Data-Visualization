// 
// a05.js
// Skeleton for CSC444 Assignment 05, Fall 2024
// Joshua A. Levine <josh@arizona.edu>
//
// This file provides the skeleton code for you to write for A05.  It
// generates (using index.html and data.js) grids of 50x50 rectangles 
// to visualize the Hurricane Isabel dataset.
//
// Your main task is to complete the four color functions.
// Additionally, you may want to add additional logic to insert color
// legends for each of the four plots.  These can be inserted as new svg
// elements in the spans colorlegend-X for X=1..4 
//



//////////////////////////////////////////////////////////////////////////////
// Global variables, preliminaries to draw the grid of rectangles

var svgSize = 500;
var bands = 50;

var xScale = d3.scaleLinear().domain([0, bands]).  range([0, svgSize]);
var yScale = d3.scaleLinear().domain([-1,bands-1]).range([svgSize, 0]);

function createSvg(sel)
{
    return sel
        .append("svg")
        .attr("width", svgSize)
        .attr("height", svgSize);
}

function createRects(sel)
{
    return sel
        .append("g")
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function(d) { return xScale(d.Col); })
        .attr("y", function(d) { return yScale(d.Row); })
        .attr("width", 10)
        .attr("height", 10)
}

d3.selection.prototype.callAndReturn = function(callable)
{
    return callable(this);
};


// Color map for Temperature: colorT1
function colorT1(d) {
    return d3.scaleLinear()
        .domain([-70, -60])
        .range(["blue", "red"])
        .interpolate(d3.interpolateLab)(d.T);
}

// Color map for Temperature (Perceptually Uniform): colorT2
function colorT2(d) {
    return d3.scaleLinear()
        .domain([-70, -60])
        .range(["blue", "red"])
        .interpolate(d3.interpolateHcl)(d.T);
}

// Color map for Pressure: colorP3
function colorP3(d) {
    return d3.scaleDiverging()
        .domain([-500, 0, 200])
        .interpolator(d3.interpolateRdYlBu)(d.P);
}

// Bivariate Color Map for Temperature and Pressure: colorPT4
function colorPT4(d) {
    let tempColor = d3.scaleLinear()
        .domain([-70, -60])
        .range([0.1, 1])(d.T);
    let pressureColor = d3.scaleDiverging()
        .domain([-500, 0, 200])
        .interpolator(d3.interpolateRdBu)(d.P);
    return d3.hcl(pressureColor).brighter(tempColor).toString();
}


//////////////////////////////////////////////////////////////////////////////
// Hook up the color functions with the fill attributes for the rects


d3.select("#plot1-temperature")
    .callAndReturn(createSvg)
    .callAndReturn(createRects)
    .attr("fill", colorT1);

d3.select("#plot2-temperature")
    .callAndReturn(createSvg)
    .callAndReturn(createRects)
    .attr("fill", colorT2);

d3.select("#plot3-pressure")
    .callAndReturn(createSvg)
    .callAndReturn(createRects)
    .attr("fill", colorP3);

d3.select("#plot4-bivariate")
    .callAndReturn(createSvg)
    .callAndReturn(createRects)
    .attr("fill", colorPT4);



