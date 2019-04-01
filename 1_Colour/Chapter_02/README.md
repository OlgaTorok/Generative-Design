[Colour](../)

# 2. Draw color spectrum using the mouse

## Step 1

```js
'use strict';

// Setting up the canvas
function setup() {
  createCanvas(500, 500);
  noStroke();
  // Setting up the colour mode to HSB from the default RGB
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  // Draw a rectangle and give it a colour
  fill(280, 100, 100);
  rect(0, 0, 100, 100);
}
```

## Step 2

```js
'use strict';

// Declaring two empty variables for steps
var stepX, stepY;

function setup() {
    createCanvas(500, 500);
    noStroke();
    colorMode(HSB, 360, 100, 100);
}

function draw() {
    /** The steps are set depending on how
     *   many columns and rows are wanted
     * */  
    stepX = width / 5;
    stepY = height / 5;

    /** Two for() loops are added to draw the rectangles
     *  in the x and y direction creating a grid
     * */
    for (var gridY = 0; gridY < height; gridY += stepY) {
        for (var gridX = 0; gridX < width; gridX += stepX) {
            fill(280, 100, 100);
            // The grids and the steps are added to create the rectangles
            rect(gridX, gridY, stepX, stepY);
        }
    }
}
```

## Step 3

```js
'use strict';

var stepX, stepY;

function setup() {
    createCanvas(500, 500);
    noStroke();
    /**  The hue and saturation are set to the width and height of the canvas */
    colorMode(HSB, width, height, 100);
}

function draw() {
    /** The steps are going to be set to the mouse locations.
     * This is going to determine the resolution of the colours
     */
    stepX = mouseX + 2;
    stepY = mouseY + 2;

    for (var gridY = 0; gridY < height; gridY += stepY) {
        for (var gridX = 0; gridX < width; gridX += stepX) {
            // Setting the colours to change depending on the grid position
            fill(gridX, height - gridY, 100);
            rect(gridX, gridY, stepX, stepY);
        }
    }
}
```

## Step 4

```js
'use strict';

var stepX, stepY;

function setup() {
    createCanvas(500, 500);
    noStroke();
    colorMode(HSB, width, height, 100);
}

function draw() {
    stepX = mouseX + 2;
    stepY = mouseY + 2;

    for (var gridY = 0; gridY < height; gridY += stepY) {
        for (var gridX = 0; gridX < width; gridX += stepX) {
            fill(gridX, height - gridY, 100);
            rect(gridX, gridY, stepX, stepY);
        }
    }
}

/* This function will save a png image of the canvas
on your computer, when the S key is pressed */
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
```

![](../images/colour_02b.PNG?raw=true "")
![](../images/colour_02c.PNG?raw=true "")
![](../images/colour_02a.PNG?raw=true "")