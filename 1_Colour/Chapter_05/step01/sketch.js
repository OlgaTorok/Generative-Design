'use strict';

// Declare a variable for image
var img;

/** This function handles the loading of external files before the setup */
function preload() {
    // Loads the image from the img folder using the p5.Image function
    img = loadImage('../img/pic1.jpg');
}

// Setting up the canvas
function setup() {
    createCanvas(500, 500);
    noStroke();
    noCursor();
    // Draw loop only once
    noLoop();
}

function draw() {

    // Loading the pixels for manipulation
    img.loadPixels();
    // console.log(img);
}