'use strict';

var tileX = 8;
var tileY = 5;

var coloursLeft = []
var coloursRight = [];
var colours = [];

// Declare a variable for the shortest interpolation
var interpolateShortest = true;

function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100);
    noStroke();
    shakeColors();
}

function draw() {

    var interCol;
    colours = [];

    var tileWidth = width / tileX;
    var tileHeight = height / tileY;

    for (var gridY = 0; gridY < tileY; gridY++) {
        var col1 = coloursLeft[gridY];
        var col2 = coloursRight[gridY];

        for (var gridX = 0; gridX < tileX; gridX++) {
            var amount = map(gridX, 0, tileX - 1, 0, 1);

            /** If statement that changes the colour mode 
             * and smooths the interpolation between colours */
            if (interpolateShortest) {
                // Change colour mode to RGB
                colorMode(RGB);
                interCol = lerpColor(col1, col2, amount);
                // Change colour mode back to HSB
                colorMode(HSB);
            } else {
                interCol = lerpColor(col1, col2, amount);
            }

            fill(interCol);

            var posX = tileWidth * gridX;
            var posY = tileHeight * gridY;
            rect(posX, posY, tileWidth, tileHeight);

            colours.push(interCol);
        }
    }
}

function shakeColors() {
    for (var i = 0; i < tileY; i++) {
        coloursLeft[i] = color(random(0, 60), random(0, 100), 100);
        coloursRight[i] = color(random(160, 190), 100, random(0, 100));
    }
}

function mouseReleased() {
    shakeColors();
}