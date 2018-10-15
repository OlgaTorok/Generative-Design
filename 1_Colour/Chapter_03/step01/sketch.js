'use strict';

// Setting up the canvas
function setup() {
    createCanvas(500, 500);
}

function draw() {
    // Setting up the colour mode to HSB from the default RGB
    colorMode(HSB, 360, 100, 100);
    background(360, 0, 100);

    /** Create a triangle fan shape using vertices  
     * by starting in the middle of the canvas */
    beginShape(TRIANGLE_FAN);
    vertex(width / 2, height / 2);
    vertex(width / 2, 50);
    vertex(width - 200, 65);
    fill(300, 100, 100);
    endShape();
}