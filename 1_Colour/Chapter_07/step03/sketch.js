'use strict';

var colorCount = 20;

var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
// Declare a seed value
var actRandomSeed = 0;

function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
}

function draw() {
    noLoop();
    // Returns a constant parameter
    randomSeed(actRandomSeed);

    for (var i = 0; i < colorCount; i++) {
        if (i % 2 == 0) {
            hueValues[i] = random(130, 220);
            saturationValues[i] = 100;
            brightnessValues[i] = random(15, 100);
        } else {
            hueValues[i] = 195;
            saturationValues[i] = random(20, 100);
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
            var h = rowHeight;

            var index = counter % colorCount;
            var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
            fill(col);
            rect(x, y, w, h);
            sumPartsNow += parts[j];

            counter++;
        }
    }
}

// Using the mouse create random patterns
function mouseReleased() {
    actRandomSeed = random(100000);
    loop();
}