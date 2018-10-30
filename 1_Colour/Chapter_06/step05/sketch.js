'use strict';

var tileX = 50;
var tileY = 50;

var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();

    for (var i = 0; i < tileX; i++) {
        hueValues[i] = random(360);
        saturationValues[i] = random(100);
        brightnessValues[i] = random(100);
    }
}

function draw() {
    background(0, 0, 100);
    var counter = 0;
    
    var mX = constrain(mouseX, 0, width);
    var mY = constrain(mouseY, 0, height);

    var currentTileX = int(map(mX, 0, width, 1, tileX));
    var currentTileY = int(map(mY, 0, height, 1, tileY));

    var tileWidth = width / currentTileX;
    var tileHeight = height / currentTileY;

    for (var gridY = 0; gridY < tileY; gridY++) {
        for (var gridX = 0; gridX < tileX; gridX++) {
            var posX = tileWidth * gridX;
            var posY = tileHeight * gridY;
            var index = counter % currentTileX;

            fill(hueValues[index], saturationValues[index], brightnessValues[index]);
            rect(posX, posY, tileWidth, tileHeight);
            counter++;
        }
    }
}

/** Add keyPressed function to the canvas. 
 * If keys s or c are pressed the canvas will be saved as a png or ase file.
 * If the keys from 0 to 9 are pressed the pattern in the canvas will change 
 * depending on the values in each statement.  
*/
function keyPressed() {
    // Sabe canvas as a png using the timstamp generative design method
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
    if (key == 'c' || key == 'C') {
        // Save the canvas as ase file
        var colors = [];
        for (var i = 0; i < hueValues.length; i++) {
            colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
        }
        // Using the generative design method, encode the data into a ase file 
        writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
    }

    if (key == '1') {
        for (var i = 0; i < tileX; i++) {
            hueValues[i] = random(360);
            saturationValues[i] = random(100);
            brightnessValues[i] = random(100);
        }
    }

    if (key == '2') {
        for (var i = 0; i < tileX; i++) {
            hueValues[i] = random(360);
            saturationValues[i] = random(100);
            brightnessValues[i] = 100;
        }
    }

    if (key == '3') {
        for (var i = 0; i < tileX; i++) {
            hueValues[i] = random(360);
            saturationValues[i] = 100;
            brightnessValues[i] = random(100);
        }
    }

    if (key == '4') {
        for (var i = 0; i < tileX; i++) {
            hueValues[i] = 0;
            saturationValues[i] = 0;
            brightnessValues[i] = random(100);
        }
    }

    if (key == '5') {
        for (var i = 0; i < tileX; i++) {
            hueValues[i] = 195;
            saturationValues[i] = 100;
            brightnessValues[i] = random(100);
        }
    }

    if (key == '6') {
        for (var i = 0; i < tileX; i++) {
            hueValues[i] = 195;
            saturationValues[i] = random(100);
            brightnessValues[i] = 100;
        }
    }

    if (key == '7') {
        for (var i = 0; i < tileX; i++) {
            hueValues[i] = random(180);
            saturationValues[i] = random(80, 100);
            brightnessValues[i] = random(50, 90);
        }
    }

    if (key == '8') {
        for (var i = 0; i < tileX; i++) {
            hueValues[i] = random(180, 360);
            saturationValues[i] = random(80, 100);
            brightnessValues[i] = random(50, 90);
        }
    }

    if (key == '9') {
        for (var i = 0; i < tileX; i++) {
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
    }

    if (key == '0') {
        for (var i = 0; i < tileX; i++) {
            if (i % 2 == 0) {
                hueValues[i] = 140;
                saturationValues[i] = random(30, 100);
                brightnessValues[i] = random(40, 100);
            } else {
                hueValues[i] = 210;
                saturationValues[i] = random(40, 100);
                brightnessValues[i] = random(50, 100);
            }
        }
    }

}