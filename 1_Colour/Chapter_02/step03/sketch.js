'use strict';

var stepX, stepY;

function setup() {
    createCanvas(500, 500);
    noStroke();
    /**  The hue and saturation are set to the width and height of the canvas */
    colorMode(HSB, width, height, 100);
}

function draw() {
    /** The steps are going to be set to the mouse locations. 
     * This is going to determine the resolution of the colours
     */
    stepX = mouseX + 2;
    stepY = mouseY + 2;

    for (var gridY = 0; gridY < height; gridY += stepY) {
        for (var gridX = 0; gridX < width; gridX += stepX) {
            // Setting the colours to change depending on the grid position
            fill(gridX, height - gridY, 100);
            rect(gridX, gridY, stepX, stepY);
        }
    }
}