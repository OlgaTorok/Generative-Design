'use strict';

// Setting up the canvas
function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
}

function draw() {
    // Add a white background
    background(0, 0, 100);

    // Adding a rectangle to the canvas
     fill(34, 100,100);
     rect(0, 0, 100, 100);
}