'use strict';

// Declaring the tile width and height
var tileX = 5;
var tileY = 5;

// Setting up the canvas size and colour mode
function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100);
    noStroke();
}

function draw() {
    //Draw a green rectangle on the screen using tileX and tileY
    fill(100, 100, 100);
    rect(0, 0, width / tileX, width / tileY);
}