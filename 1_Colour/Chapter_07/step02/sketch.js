'use strict';

var colorCount = 20;

var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
}

function draw() {
    noLoop();

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

    // Create parts out of each line strting from the end
    for (var i = rowCount; i >= 0; i--) {
        // Count the fragments 
        var partCount = i + 1;
        var parts = [];

        for (var ii = 0; ii < partCount; ii++) {
            // If the fragments are small
            if (random() < 0.075) {
                // Manage the big values
                var fragments = int(random(2, 20));
                partCount += fragments;
                for (var iii = 0; iii < fragments; iii++) {
                    parts.push(random(2));
                }
            } else {
                // Push to the empty array
                parts.push(random(2, 20));
            }
        }

        // Sum up all fragments
        var sumPartsTotal = 0;
        for (var ii = 0; ii < partCount; ii++) {
            sumPartsTotal += parts[ii];
        }

        // Draw the rectangles
        var sumPartsNow = 0;
        // Go through the loop and find out each part's location
        for (var ii = 0; ii < parts.length; ii++) {
            sumPartsNow += parts[ii];
            // We map each value to the total width
            var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
            var y = rowHeight * i;
            // Fill in the blanks
            var w = -map(parts[ii], 0, sumPartsTotal, 0, width);
            var h = rowHeight;

            var index = counter % colorCount;
            var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
            fill(col);
            // Use the set variable to draw the rectangles
            rect(x, y, w, h);
            counter++;
        }
    }
}