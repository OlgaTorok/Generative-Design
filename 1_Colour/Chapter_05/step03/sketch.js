'use strict';

var img;
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
    // Set the tile count to use the mouse
    var tileCount = floor(width / max(mouseX, 5));
    var rectSize = width / tileCount;

    img.loadPixels();
    colours = [];

    for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < tileCount; gridX++) {
            var px = int(gridX * rectSize);
            var py = int(gridY * rectSize);
            var i = (py * img.width + px) * 4;
            var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
            colours.push(c);
        }
    }

    // In loops, each pixel is filled with the colours saved in the array
    var i = 0;
    for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < tileCount; gridX++) {
            fill(colours[i]);
            rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
            i++;
        }
    }
}