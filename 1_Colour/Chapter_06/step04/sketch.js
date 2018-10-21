'use strict';

var tileX = 50;
var tileY = 50;

var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();

    for (var i = 0; i < tileX; i++) {
        hueValues[i] = random(360);
        saturationValues[i] = random(100);
        brightnessValues[i] = random(100);
    }
}

function draw() {
    background(0, 0, 100);
    var counter = 0;
    
    // Constrain the limit of the mouse to the canvas size
    var mX = constrain(mouseX, 0, width);
    var mY = constrain(mouseY, 0, height);

    // Map the mouse coordinates to the grid 
    var currentTileX = int(map(mX, 0, width, 1, tileX));
    var currentTileY = int(map(mY, 0, height, 1, tileY));

    // Change the tile count to mouse coordinates
    var tileWidth = width / currentTileX;
    var tileHeight = height / currentTileY;

    for (var gridY = 0; gridY < tileY; gridY++) {
        for (var gridX = 0; gridX < tileX; gridX++) {
            var posX = tileWidth * gridX;
            var posY = tileHeight * gridY;
            // Change the tileX to the currentTileX
            var index = counter % currentTileX;

            fill(hueValues[index], saturationValues[index], brightnessValues[index]);
            rect(posX, posY, tileWidth, tileHeight);
            counter++;
        }
    }
}