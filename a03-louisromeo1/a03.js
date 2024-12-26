/*
Author: Louis Romeo
CSC 444 Assignment 3
Date: 9/25/2024
a03.js
*/

document.addEventListener("DOMContentLoaded", function() {

    // Adjust the bar width to fit within the available space with padding
    var barPadding = 5; // Padding

    // Chart 1 (Bars) with UK Driver Fatalities data
    var svg1 = d3.select("#div1").append("svg")
        .attr("id", "chart1")
        .attr("width", 600)
        .attr("height", 300);

    var xScale1 = d3.scaleBand()
        .domain(ukDriverFatalities.map(d => d.year)) // .map to get the unique years
        .range([0, 600])
        .padding(0.2); // Use padding between bars

    var yScale1 = d3.scaleLinear()
        .domain([0, d3.max(ukDriverFatalities, d => d.count)]) // Max count for scaling
        .range([300, 0]);

    svg1.selectAll("rect")
        .data(ukDriverFatalities)
        .enter()
        .append("rect")
        .attr("x", d => xScale1(d.year))
        .attr("y", d => yScale1(d.count))
        .attr("width", xScale1.bandwidth()) // Set the width based on the available space
        .attr("height", d => 300 - yScale1(d.count))
        .attr("fill", d => `rgb(${255 - d.count / 10}, 127, 127)`);

    // Chart 2 (Circles) with UK Driver Fatalities data
    var svg2 = d3.select("#div2").append("svg")
        .attr("id", "chart2")
        .attr("width", 600)
        .attr("height", 300);

    svg2.selectAll("circle")
        .data(ukDriverFatalities)
        .enter()
        .append("circle")
        .attr("cx", d => xScale1(d.year))
        .attr("cy", d => yScale1(d.count))
        .attr("r", d => d.count / 500)
        .attr("fill", "blue");

    // Chart 3 (Bars) with UK Driver Fatalities data
    var svg3 = d3.select("#div3").append("svg")
        .attr("id", "chart3")
        .attr("width", 600)
        .attr("height", 300);

    svg3.selectAll("rect") // add bars
        .data(ukDriverFatalities)
        .enter()
        .append("rect")
        .attr("x", d => xScale1(d.year)) // Y axis is year
        .attr("y", d => yScale1(d.count))
        .attr("width", xScale1.bandwidth())
        .attr("height", d => 300 - yScale1(d.count))
        .attr("fill", d => `rgb(${255 - d.count / 10}, 127, 127)`); // mapped to color

    //Scatterplot 2 using Calvin Scores data
    var svg4 = d3.select("#div4").append("svg")
        .attr("id", "scatterplot2")
        .attr("width", 600)
        .attr("height", 300);

    var xScaleSATM = d3.scaleLinear()
        .domain([300, 800])
        .range([0, 600]);

    var yScaleSATV = d3.scaleLinear()
        .domain([300, 800])
        .range([300, 0]);

    svg4.selectAll("circle")
        .data(scores)
        .enter()
        .append("circle")
        .attr("cx", d => xScaleSATM(d.SATM)) // SATM data x axis
        .attr("cy", d => yScaleSATV(d.SATV)) // SATV data y axis
        .attr("r", 5)
        .attr("fill", "green");
});
