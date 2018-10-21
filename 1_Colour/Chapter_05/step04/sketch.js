'use strict';

var img;
var colours = [];
// Define a type of mode to sort the images
var sortMode = null;

function preload() {
    img = loadImage('../img/pic1.jpg');
}

function setup() {
    createCanvas(500, 500);
    noStroke();
    noCursor();
}

function draw() {
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

    /** Using the sortColors function from the generative design library
     * sort the colours by the colour mode */
    gd.sortColors(colours, sortMode);

    var i = 0;
    for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < tileCount; gridX++) {
            fill(colours[i]);
            rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
            i++;
        }
    }
}

/** Added keys functions that can manipulate the images */
function keyReleased() {
    if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colours)], gd.timestamp(), 'ase');
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

    if (key == '1') img = loadImage('../img/pic1.jpg');
    if (key == '2') img = loadImage('../img/pic2.jpg');
    if (key == '3') img = loadImage('../img/pic3.jpg');
    if (key == '4') img = loadImage('../img/pic4.jpg');

    if (key == '5') sortMode = null;
    if (key == '6') sortMode = gd.HUE;
    if (key == '7') sortMode = gd.SATURATION;
    if (key == '8') sortMode = gd.BRIGHTNESS;
    if (key == '9') sortMode = gd.GRAYSCALE;
}