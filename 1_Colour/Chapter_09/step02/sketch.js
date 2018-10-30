'use strict';

var colorCount = 20;
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];


function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
}

function draw() {
    noLoop();
    background(0);

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

    // Separate the line in parts
    for (var i = rowCount; i >= 0; i--) {
        // Count the fragments 
        var partCount = i + 1;
        var parts = [];

        for (var ii = 0; ii < partCount; ii++) {
            // Push to the empty array
            parts.push(random(2, 20));
        }

        // Sum up all fragments
        var sumPartsTotal = 0;
        for (var ii = 0; ii < partCount; ii++) {
            //Add all the parts together to get the total
            sumPartsTotal += parts[ii];
        }

        // Draw the rectangles
        var sumPartsNow = 0;
        // Go through the loop and find out each part's location
        for (var j = 0; j < parts.length; j++) {
            // We map each value to the total width
            var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
            var y = rowHeight * i;
            var w = map(parts[j], 0, sumPartsTotal, 0, width);
            var h = rowHeight * 1.5;

            var index = counter % colorCount;
            var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
            fill(col);
            // Use the set variable to draw the rectangles
            rect(x, y, w, h);
            // Add the total parts together
            sumPartsNow += parts[j];
            counter++;
        }
    }

}