'use strict';

var img;
// Create empty array of colours
var colours = [];

function preload() {
    img = loadImage('../img/pic1.jpg');
}

function setup() {
    createCanvas(500, 500);
    noStroke();
    noCursor();
}

function draw() {
    // Define the number of tiles
    var tileCount = 20;
    // Define the size of each tiles
    var rectSize = width / tileCount;

    img.loadPixels(); 
    // Empty the color array
    colours = [];

    // Set the x and y grid of pixel
    for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < tileCount; gridX++) {
            // Each pixel will be the seze of a rectangle
            var px = int(gridX * rectSize);
            var py = int(gridY * rectSize);
            // Using a formula to calculate the pixels from the image
            var i = (py * img.width + px) * 4;
            // Adding the first four values will create each colour object
            var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
            colours.push(c);

            // console.log(c);
        }
    }

}