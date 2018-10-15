'use strict';

// Setting up the canvas
function setup() {
    createCanvas(500, 500);
    noStroke();
    // Setting up the colour mode to HSB from the default RGB
    colorMode(HSB, 360, 100, 100);
}

function draw() {
    // Draw a rectangle and give it a colour
    fill(280, 100, 100);
    rect(0, 0, 100, 100);
}