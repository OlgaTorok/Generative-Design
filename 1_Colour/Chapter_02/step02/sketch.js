'use strict';

// Declaring two empty variables for steps
var stepX, stepY;

function setup() {
    createCanvas(500, 500);
    noStroke();
    colorMode(HSB, 360, 100, 100);
}

function draw() {
    /** The steps are set depending on how
     *   many columns and rows are wanted
     * */  
    stepX = width / 5;
    stepY = height / 5;

    /** Two for() loops are added to draw the rectangles
     *  in the x and y direction creating a grid
     * */
    for (var gridY = 0; gridY < height; gridY += stepY) {
        for (var gridX = 0; gridX < width; gridX += stepX) {
            fill(280, 100, 100);
            // The grids and the steps are added to create the rectangles
            rect(gridX, gridY, stepX, stepY);
        }
    }
}