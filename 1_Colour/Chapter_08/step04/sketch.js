'use strict';

var colorCount = 20;
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
var alphaValue = 27;
// Declare a seed value
var actRandomSeed = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
}

function draw() {
    noLoop();
    background(0);
    // Returns a constant parameter
    randomSeed(actRandomSeed);

    for (var i = 0; i < colorCount; i++) {
        if (i % 2 == 0) {
            hueValues[i] = random(360);
            saturationValues[i] = 100;
            brightnessValues[i] = random(100);
        } else {
            hueValues[i] = 195;
            saturationValues[i] = random(100);
            brightnessValues[i] = 100;
        }
    }

    var counter = 0;

    var rowCount = int(random(5, 30));
    var rowHeight = height / rowCount;

    for (var i = rowCount; i >= 0; i--) {
        var partCount = i + 1;
        var parts = [];

        for (var ii = 0; ii < partCount; ii++) {
            parts.push(random(2, 20));
        }

        var sumPartsTotal = 0;
        for (var ii = 0; ii < partCount; ii++) {
            sumPartsTotal += parts[ii];
        }

        var sumPartsNow = 0;
        for (var j = 0; j < parts.length; j++) {
            var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
            var y = rowHeight * i;
            var w = map(parts[j], 0, sumPartsTotal, 0, width);
            var h = rowHeight * 1.5;

            var index = counter % colorCount;
            var col1 = color(0);
            var col2 = color(hueValues[index], saturationValues[index], brightnessValues[index], alphaValue);
            gradient(x, y, w, h, col1, col2);
            sumPartsNow += parts[j];
            counter++;
        }
    }
}

function gradient(x, y, w, h, c1, c2) {
    var ctx = drawingContext;
    var grd = ctx.createLinearGradient(x, y, x, y + h);
    grd.addColorStop(0, c1.toString());
    grd.addColorStop(1, c2.toString());
    ctx.fillStyle = grd;
    ctx.fillRect(x, y, w, h);
}

// Using the mouse create random patterns
function mouseReleased() {
    actRandomSeed = random(100000);
    loop();
}

// Create a keyPressed funtion to save the canvas as a .png or .ase file
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
    if (key == 'c' || key == 'C') {
        // -- save an ase file (adobe swatch export) --
        var colors = [];
        for (var i = 0; i < hueValues.length; i++) {
            colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
        }
        writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
    }
}