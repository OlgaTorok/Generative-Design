[Colour](../)

# 6.  Generates specific color palettes

In this sketch, tiles are created to hold colour palettes. The number keys are used to change the colours to specific values for hue, saturation and brightness, using some randomness. The mouse is used to change the size of the tiles.

## Step 1

Draw a rectangle (tile) on the screen.

```js
'use strict';

// Setting up the canvas
function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
}

function draw() {
    // Add a white background
    background(0, 0, 100);

    // Adding a rectangle to the canvas
     fill(34, 100,100);
     rect(0, 0, 100, 100);
}
```

## Step 2

Draw a canvas full of tiles.

```js
'use strict';

// Adding the size of the tiles
var tileX = 50;
var tileY = 50;

function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
}

function draw() {
    background(0, 0, 100);

    // Adding loops to create a canvas full of rectangles
    for (var gridY = 0; gridY < height; gridY+= tileY) {
        for (var gridX = 0; gridX < width; gridX+= tileX) {
            fill(34, 100, 100);
            rect(gridX, gridY, tileX, tileY);
        }
    }
}
```

## Step 3

Add colour pattern to the tiles.

```js
'use strict';

var tileX = 50;
var tileY = 50;

// Adding arrays for each HSB value
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();

    // Add random values to the colour arrays
    for (var i = 0; i < tileX; i++) {
        hueValues[i] = random(360);
        saturationValues[i] = random(100);
        brightnessValues[i] = random(100);
    }
}

function draw() {
    background(0, 0, 100);

    // Add a tile counter
    var counter = 0;

    // Determine the tile width and height
    var tileWidth = width / tileX;
    var tileHeight = height / tileY;

    // Change the loop from width and height to tile count
    for (var gridY = 0; gridY < tileY; gridY++) {
        for (var gridX = 0; gridX < tileX; gridX++) {
            // Add the x and y position of each tile
            var posX = tileWidth * gridX;
            var posY = tileHeight * gridY;
            // Create a variable to determine the index of each colour array
            var index = counter % tileX;

            // Add each array with the random index to create a HSB fill colour
            fill(hueValues[index], saturationValues[index], brightnessValues[index]);
            // Add the new position to the rectangle
            rect(posX, posY, tileWidth, tileHeight);
            // Add to the counter every loop
            counter++;
        }
    }
}
```

## Step 4

Add mouse interaction.

```js
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

    // Constrain the limit of the mouse to the canvas size
    var mX = constrain(mouseX, 0, width);
    var mY = constrain(mouseY, 0, height);

    // Map the mouse coordinates to the grid
    var currentTileX = int(map(mX, 0, width, 1, tileX));
    var currentTileY = int(map(mY, 0, height, 1, tileY));

    // Change the tile count to mouse coordinates
    var tileWidth = width / currentTileX;
    var tileHeight = height / currentTileY;

    for (var gridY = 0; gridY < tileY; gridY++) {
        for (var gridX = 0; gridX < tileX; gridX++) {
            var posX = tileWidth * gridX;
            var posY = tileHeight * gridY;
            // Change the tileX to the currentTileX
            var index = counter % currentTileX;

            fill(hueValues[index], saturationValues[index], brightnessValues[index]);
            rect(posX, posY, tileWidth, tileHeight);
            counter++;
        }
    }
}
```

## Step 5

 Adding extra interactivity to the page by using keys.

```js
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
```
![Colour palettes 1](../images/colour_06a.png?raw=true "Colour palettes")
![Colour palettes 2](../images/colour_06b.png?raw=true "Colour palettes")
![Colour palettes 3](../images/colour_06c.png?raw=true "Colour palettes")
![Colour palettes 4](../images/colour_06d.png?raw=true "Colour palettes")