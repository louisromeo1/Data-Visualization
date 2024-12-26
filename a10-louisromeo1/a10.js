// 
// a10.js
// Template code for CSC444 Assignment 10, Fall 2024
// Joshua A. Levine <josh@arizona.edu>
//
// This implements an editable transfer function to be used in concert
// with the volume renderer defined in volren.js
//
// It expects a div with id 'tfunc' to place the d3 transfer function
// editor
//


////////////////////////////////////////////////////////////////////////
// Global variables and helper functions

// colorTF and opacityTF store a list of transfer function control
// points.  Each element should be [k, val] where k is the scalar
// position and val is either a d3.rgb or opacity in [0,1] 
let colorTF = [];
let opacityTF = [];

// D3 layout variables
let size = 500;
let svg = null;

// Variables for the scales
let xScale = null;
let yScale = null;
let colorScale = null;

////////////////////////////////////////////////////////////////////////
// Visual Encoding portion that handles the d3 aspects

// Function to create the d3 objects
function initializeTFunc() {
  svg = d3.select("#tfunc")
    .append("svg")
    .attr("width", size)
    .attr("height", size);

  // Initialize the axes
  xScale = d3.scaleLinear().domain([0, 1]).range([0, size]);
  yScale = d3.scaleLinear().domain([0, 1]).range([size, 0]);

  svg.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0, ${size})`)
    .call(d3.axisBottom(xScale));

  svg.append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(yScale));

  // Initialize path for the opacity TF curve
  svg.append("path")
    .attr("class", "opacity-curve")
    .style("fill", "none")
    .style("stroke", "black");

  // Initialize circles for the opacity TF control points
  let drag = d3.drag()
    .on('start', dragstarted)
    .on('drag', dragged)
    .on('end', dragended);

  svg.append("g")
    .attr("class", "points")
    .selectAll("circle")
    .data(opacityTF)
    .enter()
    .append("circle")
    .attr("index", (d, i) => i)
    .style('cursor', 'pointer')
    .call(drag);

  // Create the color bar to show the color TF
  svg.append("g")
    .attr("class", "color-bar");

  // After initializing, set up anything that depends on the TF arrays
  updateTFunc();
}

// Call this function whenever a new dataset is loaded or whenever
// colorTF and opacityTF change
function updateTFunc() {
  // Update scales
  xScale = d3.scaleLinear()
    .domain([dataRange[0], dataRange[1]])
    .range([0, size]);

  yScale = d3.scaleLinear()
    .domain([0, 1])
    .range([size, 0]);

  colorScale = d3.scaleLinear()
    .domain(colorTF.map(d => d[0]))
    .range(colorTF.map(d => d[1]));

  // Update axes
  d3.select(".x-axis").call(d3.axisBottom(xScale));
  d3.select(".y-axis").call(d3.axisLeft(yScale));

  // Update opacity curves
  d3.select(".opacity-curve")
    .datum(opacityTF)
    .attr("d", d3.line()
      .x(d => xScale(d[0]))
      .y(d => yScale(d[1]))
    );

  d3.select(".points")
    .selectAll("circle")
    .data(opacityTF)
    .join("circle")
    .attr("cx", d => xScale(d[0]))
    .attr("cy", d => yScale(d[1]))
    .attr("r", 5)
    .style("fill", d => colorScale ? colorScale(d[0]) : "black");

  // Update color bar
  const bar = d3.select(".color-bar")
    .selectAll("rect")
    .data(d3.range(dataRange[0], dataRange[1], (dataRange[1] - dataRange[0]) / size))
    .join("rect")
    .attr("x", d => xScale(d))
    .attr("y", size - 20)
    .attr("width", size / colorTF.length)
    .attr("height", 20)
    .style("fill", d => colorScale(d));
}

// To start, let's reset the TFs and then initialize the d3 SVG canvas
// to draw the default transfer function
resetTFs();
initializeTFunc();

////////////////////////////////////////////////////////////////////////
// Interaction callbacks

// Will track which point is selected
let selected = null;

// Called when mouse down
function dragstarted(event, d) {
  selected = parseInt(d3.select(this).attr("index"));
}

// Called when mouse drags
function dragged(event, d) {
  if (selected != null) {
    let pos = [];
    pos[0] = xScale.invert(event.x);
    pos[1] = yScale.invert(event.y);

    // Handle constraints for endpoints
    if (selected === 0 || selected === opacityTF.length - 1) {
      pos[0] = opacityTF[selected][0]; // Lock x-coordinate for endpoints
    } else {
      // Prevent crossing adjacent points
      pos[0] = Math.max(opacityTF[selected - 1][0] + 0.01, Math.min(opacityTF[selected + 1][0] - 0.01, pos[0]));
    }

    // Ensure y stays within [0, 1]
    pos[1] = Math.max(0, Math.min(1, pos[1]));

    opacityTF[selected] = pos;

    // Update TF window
    updateTFunc();
    
    // Update volume renderer
    updateVR(colorTF, opacityTF);
  }
}

// Called when mouse up
function dragended() {
  selected = null;
}

////////////////////////////////////////////////////////////////////////
// Functions to respond to buttons that switch color TFs

// Make a sequential color TF
function makeSequential() {
  colorScale = d3.scaleLinear()
    .domain([dataRange[0], dataRange[1]])
    .range([d3.rgb(0, 0, 255), d3.rgb(255, 0, 0)]);

  colorTF = d3.range(dataRange[0], dataRange[1], (dataRange[1] - dataRange[0]) / 5)
    .map(value => [value, colorScale(value)]);
}

// Make a diverging color TF
function makeDiverging() {
  colorScale = d3.scaleLinear()
    .domain([dataRange[0], (dataRange[0] + dataRange[1]) / 2, dataRange[1]])
    .range([d3.rgb(0, 0, 255), d3.rgb(255, 255, 255), d3.rgb(255, 0, 0)]);

  colorTF = d3.range(dataRange[0], dataRange[1], (dataRange[1] - dataRange[0]) / 5)
    .map(value => [value, colorScale(value)]);
}

// Make a categorical color TF
function makeCategorical() {
  const categories = d3.schemeCategory10;
  colorScale = d3.scaleQuantize()
    .domain([dataRange[0], dataRange[1]])
    .range(categories);

  colorTF = d3.range(dataRange[0], dataRange[1], (dataRange[1] - dataRange[0]) / categories.length)
    .map(value => [value, d3.rgb(colorScale(value))]);
}

// Configure callbacks for each button
d3.select("#sequential").on("click", function() {
  makeSequential();
  updateTFunc();
  updateVR(colorTF, opacityTF, false);
});

d3.select("#diverging").on("click", function() {
  makeDiverging();
  updateTFunc();
  updateVR(colorTF, opacityTF, false);
});

d3.select("#categorical").on("click", function() {
  makeCategorical();
  updateTFunc();
  updateVR(colorTF, opacityTF, true);
});

////////////////////////////////////////////////////////////////////////
// Function to read data

function upload() {
  if (input.files.length > 0) {
    let file = input.files[0];
    let fReader = new FileReader();
    fReader.readAsArrayBuffer(file);

    fReader.onload = function(e) {
      let fileData = fReader.result;
      initializeVR(fileData);
      resetTFs();
      updateTFunc();
      updateVR(colorTF, opacityTF, false);
    };
  }
}

// Attach upload process to the loadData button
var input = document.getElementById("loadData");
input.addEventListener("change", upload);

// Reset TFs
function resetTFs() {
  makeSequential();
  makeOpacity();
}

// Make a default opacity TF
function makeOpacity() {
  opacityTF = [
    [dataRange[0], 0],
    [(dataRange[0] + dataRange[1]) * 0.25, 0.5],
    [(dataRange[0] + dataRange[1]) * 0.5, 1],
    [(dataRange[0] + dataRange[1]) * 0.75, 0.5],
    [dataRange[1], 0]
  ];
}
