'use strict';
// Change the tileX to see the difference in swatches
var tileX = 8;
var tileY = 5;

/** Declaring three empty arrays that will contain the swatch colours. 
 * The left and right side array and the colours array containing the  
 * colour swatches found in between. */
var coloursLeft = []
var coloursRight = [];
var colours = [];

function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100);
    noStroke();
    // Call the shakeColors function
    shakeColors();
}

function draw() {
    //Declaring a variable that will populate the colour array
    var interCol;
    // Set the colour array to be empty every time the draw function runs
    colours = [];

    var tileWidth = width / tileX;
    var tileHeight = height / tileY;

    for (var gridY = 0; gridY < tileY; gridY++) {
        /** Declaring new varieble for the colours on the two sides.
         * Both colours will run on the y axis */
        var col1 = coloursLeft[gridY];
        var col2 = coloursRight[gridY];

        for (var gridX = 0; gridX < tileX; gridX++) {
            // Declare a variable amount that maps the gridX to a number between 0 and 1
            var amount = map(gridX, 0, tileX - 1, 0, 1);
            /* Blend col1 and col2 together to return a colour in between 
               depending on the amount of interpolation */
            interCol = lerpColor(col1, col2, amount);

            fill(interCol);
            // Set the x and y position of each tiles
            var posX = tileWidth * gridX;
            var posY = tileHeight * gridY;
            rect(posX, posY, tileWidth, tileHeight);
            /* Push the colour to the colours array. 
             * This can be exported as ase */
            colours.push(interCol);
        }
    }
}

/** This function will take the left and right colour arrays 
 * and fills them with random colours */
function shakeColors() {
    for (var i = 0; i < tileY; i++) {
        coloursLeft[i] = color(random(0, 60), random(0, 100), 100);
        coloursRight[i] = color(random(160, 190), 100, random(0, 100));
    }
}