'use strict';

// Setting up the canvas
function setup() {
    createCanvas(400, 400);
    noStroke();
    // Setting up the colour mode to HSB from the default RGB
    colorMode(HSB, 360, 100, 100);
    // Setting the rectangle mode to be drawn from the center point
    rectMode(CENTER);
}

function draw() {
    // Draw a rectangle in the middle of the page and give it a colour
    fill(100, 56, 34);
    rect(width / 2, height / 2, 100, 100);
}