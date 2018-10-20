'use strict';

var tileX = 5;
var tileY = 5;

function setup() { 
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100);
    noStroke();
}

function draw() {
    // Declaring the variables for tile width and height
    var tileWidth = width / tileX;
    var tileHeight = height / tileY;

    // Adding loops to add the tiles on the x and y direction
    for (var gridY = 0; gridY <= height; gridY += tileHeight) {
        for(var gridX = 0; gridX <= width; gridX += tileWidth){
            fill(100, 100, 100);
            rect(gridX, gridY, tileWidth, tileHeight);
        }
    }
}