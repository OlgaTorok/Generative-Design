'use strict';

// Declare new variable for colour count
var colorCount = 20;

// Add random values to the colour arrays
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];


// Setting up the canvas
function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
}

function draw() {
    // Only loops once
    noLoop();
    background(0);

    // Create a colour palette by adding random values to the arrays
    for (var i = 0; i < colorCount; i++) {
        if (i % 2 == 0) {
            hueValues[i] = random(180);
            saturationValues[i] = random(50)
            brightnessValues[i] = 100;
        } else {
            hueValues[i] = random(360);
            saturationValues[i] = 100;
            brightnessValues[i] = random(100);
        }
    }

    // Add a tile counter
    var counter = 0;

    // Add a random row count and a row height
    var rowCount = int(random(5, 30));
    var rowHeight = height / rowCount;
    
    // Declare a variable that will create an index for the arrays
    var index = counter % colorCount;
    // Add the index to each array to create a HSB colour
    var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
    fill(col);
    rect(0, 0, rowCount, rowHeight);
    counter++;

}