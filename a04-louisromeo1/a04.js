/*
Author: Louis Romeo
CSC 444 Assignment 4
Date: 10/1/2024
a04.js
*/

window.onload = function() {
    // locate tag div1
    const div = document.getElementById("div1");

    // Load dataset from calvinScores.js
    const data = scores;
    console.log(data); // debugging: check if data is correctly loaded

    // SVG dimensions
    const width = 500;
    const height = 500;
    const padding = 50;

    // Create scales for the scatterplot
    const cxScale = d3.scaleLinear()
        .domain([d3.min(data, d => d.SATV), d3.max(data, d => d.SATV)])
        .range([padding, width - padding]);

    const cyScale = d3.scaleLinear()
        .domain([d3.min(data, d => d.ACT), d3.max(data, d => d.ACT)])
        .range([height - padding, padding]);

    const rScale = d3.scaleSqrt()
        .domain([d3.min(data, d => d.SATM), d3.max(data, d => d.SATM)])
        .range([2, 12]);

    const colorScale1 = d3.scaleLinear()
        .domain([d3.min(data, d => d.GPA), d3.max(data, d => d.GPA)])
        .range(["yellowgreen", "deeppink"]);

    const colorScale2 = d3.scaleLinear()
        .domain([d3.min(data, d => d.GPA), d3.mean(data, d => d.GPA), d3.max(data, d => d.GPA)])
        .range(["#4dac26", "#f7f7f7", "#d01c8b"]);

    const colorScale3 = d3.scaleQuantize()
        .domain([d3.min(data, d => d.GPA), d3.max(data, d => d.GPA)])
        .range(["#4dac26", "#b8e186", "#f7f7f7", "#f1b6da", "#d01c8b"]);

    // D3 appending SVG
    const svg = d3.select("#div1")
        .append("svg") // appending by tag, not html
        .attr("id", "scatterplot1")
        .attr("width", width)
        .attr("height", height)
        .style("border", "1px solid black"); // Add border for visibility check
    console.log(svg ? "SVG appended" : "SVG not appended"); // debug output

    // Append circles for each data point
    const circles = svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => cxScale(d.SATV))
        .attr("cy", d => cyScale(d.ACT))
        .attr("r", d => rScale(d.SATM))
        .attr("fill", d => colorScale1(d.GPA));
    console.log(circles ? "Circles appended" : "Circles not appended"); // debugging output

    // X-axis
    const xAxis = d3.axisBottom(cxScale);
    svg.append("g")
        .attr("transform", `translate(0, ${height - padding})`)
        .call(xAxis);

    // Y-axis
    const yAxis = d3.axisLeft(cyScale);
    svg.append("g")
        .attr("transform", `translate(${padding}, 0)`)
        .call(yAxis);

    // Axis Labels
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height - 10)
        .attr("text-anchor", "middle")
        .text("SAT Verbal (SATV)");

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", 15)
        .attr("text-anchor", "middle")
        .text("ACT Score");

    // Button functionality
    d3.select("#controls")
        .selectAll("button")
        .on("click", function() {
            const buttonID = d3.select(this).attr("id");
            let selectedColorScale;

            // Switch between different colormaps based on button clicked
            switch (buttonID) {
                case "colormap-button-1":
                    selectedColorScale = colorScale1; // First colormap (continuous)
                    break;
                case "colormap-button-2":
                    selectedColorScale = colorScale2; // Second colormap (PiYG)
                    break;
                case "colormap-button-3":
                    selectedColorScale = colorScale3; // Third colormap (quantized PiYG-5)
                    break;
            }

            // Smooth transition
            svg.selectAll("circle")
                .transition() // Animation
                .duration(1500) // Duration of 1.5 seconds
                .attr("fill", d => selectedColorScale(d.GPA)); // circle colors
        });
};
