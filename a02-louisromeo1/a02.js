/* 
Author - Louis Romeo 
CSC 444 - Assignment 2
Date: 9/17/2024
a02.js
*/

// Initialize all visualizations after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    createScatterplot1();
    createScatterplot2();
    createScatterplot3();
});

// Visualization 1
function createScatterplot1() {
    var scatterplot1 = document.getElementById("scatterplot1");
    plotAll(scatterplot1, scores, 'circle', {
        cx: function(d) { return (d.SATM - 400) * (500 / 400); },  // Scale SATM
        cy: function(d) { return 500 - ((d.SATV - 400) * (500 / 400)); },  // Scale SATV
        r: function(d) { return 5; },  // Fixed radius
        fill: function(d) { return rgb(0.2, 0.4, 0.8); }  // Fixed color
    });
    addAxisLabelsAndTicks(scatterplot1, "SAT Math (SATM)", "SAT Verbal (SATV)", [400, 800], [400, 800]);
}

// Visualization 2
function createScatterplot2() {
    var scatterplot2 = document.getElementById("scatterplot2");
    plotAll(scatterplot2, scores, 'circle', {
        cx: function(d) { return d.GPA * 125; },  // GPA range 
        cy: function(d) { return 500 - d.ACT * 14; },  // ACT range
        r: function(d) { return d.SATV / 50; },  // Radius proportional to SATV
        fill: function(d) {
            var scaledSATM = (d.SATM - 400) / 400;
            return rgb(scaledSATM, 0.2, 0.5);  // Color mapped to SATM
        }
    });
    addAxisLabelsAndTicks(scatterplot2, "GPA", "ACT Score", [0, 4], [15, 35]);
}

// Visualization 3
function createScatterplot3() {
    var scatterplot3 = document.getElementById("scatterplot3");
    plotAll(scatterplot3, scores, 'circle', {
        cx: function(d) { return ((d.SATM + d.SATV) - 800) * (500 / 800); },  // SATM + SATV 
        cy: function(d) { return 500 - d.ACT * 14; },  // ACT range
        r: function(d) { return 5; },  // Fixed radius
        fill: function(d) {
            var scaledGPA = d.GPA / 4; 
            return rgb(0.3, scaledGPA, 0.6); // color mapped to gpa
        }
    });
    addAxisLabelsAndTicks(scatterplot3, "Sum of SATM + SATV", "ACT Score", [800, 1600], [15, 35]); // Extra credit
}

// Helper function to add axis labels and numerical ticks
function addAxisLabelsAndTicks(svg, xlabel, ylabel, xRange, yRange) {
    // X-axis
    svg.appendChild(make("line", {
        x1: 0,
        y1: 500,
        x2: 500,
        y2: 500,
        stroke: "black"
    }));

    // Y-axis
    svg.appendChild(make("line", {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 500,
        stroke: "black"
    }));

    // X-axis labels and ticks
    for (let i = 0; i <= 5; i++) {
        let xValue = xRange[0] + (xRange[1] - xRange[0]) * i / 5;
        let xPosition = 500 * i / 5;
        svg.appendChild(make("line", {
            x1: xPosition,
            y1: 500,
            x2: xPosition,
            y2: 490,
            stroke: "black"
        }));
        svg.appendChild(make("text", {
            x: xPosition,
            y: 520,
            "text-anchor": "middle",
            "font-size": "12px",
            fill: "black",
            text: xValue.toFixed(0)
        }));
    }

    // Y-axis labels and ticks
    for (let i = 0; i <= 5; i++) {
        let yValue = yRange[0] + (yRange[1] - yRange[0]) * i / 5;
        let yPosition = 500 - (500 * i / 5);
        svg.appendChild(make("line", {
            x1: 0,
            y1: yPosition,
            x2: 10,
            y2: yPosition,
            stroke: "black"
        }));
        svg.appendChild(make("text", {
            x: -10,
            y: yPosition + 5,
            "text-anchor": "end",
            "font-size": "12px",
            fill: "black",
            text: yValue.toFixed(0)
        }));
    }

    // X-axis label
    svg.appendChild(make("text", {
        x: 250,
        y: 540,
        "text-anchor": "middle",
        "font-size": "16px",
        fill: "black",
        text: xlabel
    }));

    // Y-axis label
    const yLabel = make("text", {
        x: -250,
        y: 20,
        "text-anchor": "middle",
        "font-size": "16px",
        fill: "black",
        transform: "rotate(-90)",
        text: ylabel
    });
    svg.appendChild(yLabel);
}
