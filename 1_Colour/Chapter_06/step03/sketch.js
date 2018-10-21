'use strict';

var tileX = 50;
var tileY = 50;

// Adding arrays for each HSB value
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();

    // Add random values to the colour arrays
    for (var i = 0; i < tileX; i++) {
        hueValues[i] = random(360);
        saturationValues[i] = random(100);
        brightnessValues[i] = random(100);
    }
}

function draw() {
    background(0, 0, 100);

    // Add a tile counter
    var counter = 0;

    // Determine the tile width and height
    var tileWidth = width / tileX;
    var tileHeight = height / tileY;

    // Change the loop from width and height to tile count
    for (var gridY = 0; gridY < tileY; gridY++) {
        for (var gridX = 0; gridX < tileX; gridX++) {
            // Add the x and y position of each tile
            var posX = tileWidth * gridX;
            var posY = tileHeight * gridY;
            // Create a variable to determine the index of each colour array
            var index = counter % tileX;

            // Add each array with the random index to create a HSB fill colour
            fill(hueValues[index], saturationValues[index], brightnessValues[index]);
            // Add the new position to the rectangle
            rect(posX, posY, tileWidth, tileHeight);
            // Add to the counter every loop
            counter++;
        }
    }
}