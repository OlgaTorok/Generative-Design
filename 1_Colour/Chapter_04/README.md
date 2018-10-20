# 4. Interpolate colours in different colour modes

## Step 1

Draw a rectangle on the screen.

```js
'use strict';

// Declaring the tile width and height
var tileX = 5;
var tileY = 5;

// Setting up the canvas size and colour mode
function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100);
    noStroke();
}

function draw() {
    //Draw a green rectangle on the screen using tileX and tileY
    fill(100, 100, 100);
    rect(0, 0, width / tileX, width / tileY);
}
```

## Step 2

Draw a canvas full of rectangles using a loop.

```js
 'use strict';

var tileX = 5;
var tileY = 5;

function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100);
    noStroke();
}

function draw() {
    // Declaring the variables for tile width and height
    var tileWidth = width / tileX;
    var tileHeight = height / tileY;

    // Adding loops to add the tiles on the x and y direction
    for (var gridY = 0; gridY <= height; gridY += tileHeight) {
        for(var gridX = 0; gridX <= width; gridX += tileWidth){
            fill(100, 100, 100);
            rect(gridX, gridY, tileWidth, tileHeight);
        }
    }
}
```

## Step 3

Add a palette of colours using interpolation.

```js
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
```

## Step 4

Change rectangle colours randomly using mouse clicks.

```js
'use strict';

var tileX = 8;
var tileY = 5;

var coloursLeft = []
var coloursRight = [];
var colours = [];

// Declare a variable for the shortest interpolation
var interpolateShortest = true;

function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100);
    noStroke();
    shakeColors();
}

function draw() {

    var interCol;
    colours = [];

    var tileWidth = width / tileX;
    var tileHeight = height / tileY;

    for (var gridY = 0; gridY < tileY; gridY++) {
        var col1 = coloursLeft[gridY];
        var col2 = coloursRight[gridY];

        for (var gridX = 0; gridX < tileX; gridX++) {
            var amount = map(gridX, 0, tileX - 1, 0, 1);

            /** If statement that changes the colour mode
             * and smooths the interpolation between colours */
            if (interpolateShortest) {
                // Change colour mode to RGB
                colorMode(RGB);
                interCol = lerpColor(col1, col2, amount);
                // Change colour mode back to HSB
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
```

## Step 5

Add mouse interaction and options to save the canvas in an .ase or .png image or change the colour mode from HSB to RGB.

```js
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
```