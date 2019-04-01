[Colour](../)

# 5.  Extract and sort the color palette of an image

## Step 1

```js
'use strict';

// Declare a variable for image
var img;

/** This function handles the loading of external files before the setup */
function preload() {
    // Loads the image from the img folder using the p5.Image function
    img = loadImage('../img/pic1.jpg');
}

// Setting up the canvas
function setup() {
    createCanvas(500, 500);
    noStroke();
    noCursor();
    // Draw loop only once
    noLoop();
}

function draw() {

    // Loading the pixels for manipulation
    img.loadPixels();
    // console.log(img);
}
```

## Step 2

```js
'use strict';

var img;
// Create empty array of colours
var colours = [];

function preload() {
    img = loadImage('../img/pic1.jpg');
}

function setup() {
    createCanvas(500, 500);
    noStroke();
    noCursor();
}

function draw() {
    // Define the number of tiles
    var tileCount = 20;
    // Define the size of each tiles
    var rectSize = width / tileCount;

    img.loadPixels(); 
    // Empty the color array
    colours = [];

    // Set the x and y grid of pixel
    for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < tileCount; gridX++) {
            // Each pixel will be the seze of a rectangle
            var px = int(gridX * rectSize);
            var py = int(gridY * rectSize);
            // Using a formula to calculate the pixels from the image
            var i = (py * img.width + px) * 4;
            // Adding the first four values will create each colour object
            var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
            colours.push(c);

            // console.log(c);
        }
    }
}
```

## Step 3

```js
'use strict';

var img;
var colours = [];

function preload() {
    img = loadImage('../img/pic1.jpg');
}

function setup() {
    createCanvas(500, 500);
    noStroke();
    noCursor();
}

function draw() {
    // Set the tile count to use the mouse
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

    // In loops, each pixel is filled with the colours saved in the array
    var i = 0;
    for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < tileCount; gridX++) {
            fill(colours[i]);
            rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
            i++;
        }
    }
}
```

## Step 4

```js
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
```
![](../images/colour_05a.PNG?raw=true "")
![](../images/colour_05b.PNG?raw=true "")