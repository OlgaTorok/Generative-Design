'use strict';

var tileX = 8;
var tileY = 5;

var coloursLeft = []
var coloursRight = [];
var colours = [];

var interpolateShortest = true;

function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100);
    noStroke();
    shakeColors();
}

function draw() {
    // Change the x and y tiles to use a mapped mouse x and y position
    tileX = int(map(mouseX, 0, width, 2, 50));
    tileY = int(map(mouseY, 0, height, 2, 10));

    var interCol;
    colours = [];

    var tileWidth = width / tileX;
    var tileHeight = height / tileY;

    for (var gridY = 0; gridY < tileY; gridY++) {
        var col1 = coloursLeft[gridY];
        var col2 = coloursRight[gridY];

        for (var gridX = 0; gridX < tileX; gridX++) {
            var amount = map(gridX, 0, tileX - 1, 0, 1);

            if (interpolateShortest) {
                colorMode(RGB);
                interCol = lerpColor(col1, col2, amount);
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

/** The function contains if statements that save the canvas as an ase file if key c is pressed,
 * saves the canvas as a png image if the s key is pressed and if key 1 or 2 are pressed the color 
 * mode changes from RGB to HSB */
function keyPressed() {
    if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
    if (key == '1') interpolateShortest = true;
    if (key == '2') interpolateShortest = false;
}