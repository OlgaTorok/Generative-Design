'use strict';

// Adding the size of the tiles
var tileX = 50;
var tileY = 50; 

function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
}

function draw() {
    background(0, 0, 100);

    // Adding loops to create a canvas full of rectangles
    for (var gridY = 0; gridY < height; gridY+= tileY) {
        for (var gridX = 0; gridX < width; gridX+= tileX) {
            fill(34, 100, 100);
            rect(gridX, gridY, tileX, tileY);
        }
    }
}