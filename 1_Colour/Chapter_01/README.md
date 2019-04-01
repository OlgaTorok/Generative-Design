[Colour](../)

# 1. Changing colour and size using the mouse

## Step 1

```js
'use strict';

// Setting up the canvas
function setup() {
    createCanvas(400, 400);
    noStroke();
    // Setting up the colour mode to HSB from the default RGB
    colorMode(HSB, 360, 100, 100);
    // Setting the rectangle mode to be drawn from the center point
    rectMode(CENTER);
}

function draw() {
    // Draw a rectangle in the middle of the page and give it a colour
    fill(100, 56, 34);
    rect(width/2, height/2, 100, 100);
}
```

## Step 2

```js
'use strict';

function setup() {
    createCanvas(400, 400);
    noStroke();
    colorMode(HSB, 360, 100, 100);
    rectMode(CENTER);
}

function draw() {
    /* Background contains the mouseY to change the colour 
    depending on the mouse position */
    background(mouseY/2, 100, 100);
    /* MouseY was added to the fill to change the colour
    depending on the position of the mouse*/
    fill(360 - mouseY / 2, 100, 100);
    /* MouseX was added to the width and height of the rectangle
    so the size will change depending on the mouse position*/ 
    rect(width/2, height/2, mouseX + 1, mouseX + 1);
}
```

## Step 3

```js
'use strict';

function setup() {
    createCanvas(400, 400);
    noStroke();
    colorMode(HSB, 360, 100, 100);
    rectMode(CENTER);
}

function draw() {
    background(mouseY/2, 100, 100);
    fill(360 - mouseY / 2, 100, 100);
    rect(width/2, height/2, mouseX + 1, mouseX + 1);
}

/* This function will save a png image of the canvas 
on your computer, when the S key is pressed */
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
```

![](../images/colour_01a.PNG?raw=true "")
![](../images/colour_01b.PNG?raw=true "")
