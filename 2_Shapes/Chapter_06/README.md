[Shapes](../)

# 6. Changing number, color and strokeweight on diagonals in a grid

## Step 1

```js
'use strict';

// Declare variables for tiles
let noOfTiles = 15;


function setup(){
	createCanvas(500, 500);
}

function draw(){
    background(128);
    noLoop();

    // create a grid that will contain a list of lines
	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){

            // Set the x and y position of the lines
            let posX = width / noOfTiles * gridX;
            let posY = height / noOfTiles * gridY;
            // Returns a random number between 0 and 2
            let choice = Math.floor(random(0, 2));
            
            // If the random number is 0 then draw the line to the right else to the left
			if(choice == 0){
                // Draw two right slanting lines at the random positions on the grid
				line(posX, posY, posX + (width / noOfTiles) / 2, posY + height / noOfTiles);
                line(posX + (width / noOfTiles) / 2, posY, posX + (width / noOfTiles), posY + height / noOfTiles);
			} else {
                // Draw two left slanting lines at the random positions on the grid
				line(posX, posY + width / noOfTiles, posX + (height / noOfTiles) / 2, posY);
                line(posX + (height / noOfTiles) / 2, posY + width / noOfTiles, posX + (height / noOfTiles), posY);
			}
		}
	}
}
```

## Step 2

```js
'use strict';

let noOfTiles = 15;
// Add random seed
var actRandomSeed = 0;


function setup(){
	createCanvas(500, 500);
}

function draw(){
    background(128);
    // Draws every second but on the same pattern - used instead of noLoop()
    randomSeed(actRandomSeed);

	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){

            let posX = width / noOfTiles * gridX;
            let posY = height / noOfTiles * gridY;

            let choice = Math.floor(random(0, 2));
            
			if(choice == 0){
				line(posX, posY, posX + (width / noOfTiles) / 2, posY + height / noOfTiles);
                line(posX + (width / noOfTiles) / 2, posY, posX + (width / noOfTiles), posY + height / noOfTiles);
			} else {
				line(posX, posY + width / noOfTiles, posX + (height / noOfTiles) / 2, posY);
                line(posX + (height / noOfTiles) / 2, posY + width / noOfTiles, posX + (height / noOfTiles), posY);
			}
		}
	}
}

// If the mouse is pressed the lines change position
function mousePressed() {
  actRandomSeed = random(100000);
}
```

## Step 3

```js
'use strict';

let noOfTiles = 15;
var actRandomSeed = 0;
// Declare variables for colour
var colorLeft;
var colorRight;
var alphaLeft = 100;
var alphaRight = 100;


function setup(){
	createCanvas(500, 500);

    // Add the color for the left and right lines
    colorLeft = color(241, 13, 44, alphaLeft);
    colorRight = color(152, 249, 236, alphaRight);
}

function draw(){
    background(128);
    randomSeed(actRandomSeed);

	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){

            let posX = width / noOfTiles * gridX;
            let posY = height / noOfTiles * gridY;

            let choice = Math.floor(random(0, 2));
            
			if(choice == 0){
                // Add the stroke colour for the left lines
                stroke(colorLeft);
				line(posX, posY, posX + (width / noOfTiles) / 2, posY + height / noOfTiles);
                line(posX + (width / noOfTiles) / 2, posY, posX + (width / noOfTiles), posY + height / noOfTiles);
			} else {
                // Add the stroke colour for the right lines
                stroke(colorRight);
				line(posX, posY + width / noOfTiles, posX + (height / noOfTiles) / 2, posY);
                line(posX + (height / noOfTiles) / 2, posY + width / noOfTiles, posX + (height / noOfTiles), posY);
			}
		}
	}
}

function mousePressed() {
  actRandomSeed = random(100000);
}
```

## Step 4

```js
'use strict';

let noOfTiles = 15;
var actRandomSeed = 0;
var colorLeft;
var colorRight;
// Change the alpha
var alphaLeft = 0;
var alphaRight = 100;
// Declare transparency variables
var transparentLeft = false;
var transparentRight = false;


function setup(){
    createCanvas(500, 500);
    // Change colour mode to HSB
    colorMode(HSB, 360, 100, 100, 100);
    colorLeft = color(241, 13, 44, alphaLeft);
    colorRight = color(152, 249, 236, alphaRight);
}

function draw(){
    background(360, 0, 50);
    // Add a stroke using the mouseX
    strokeWeight(mouseX / 15);
    randomSeed(actRandomSeed);

	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){

            let posX = width / noOfTiles * gridX;
            let posY = height / noOfTiles * gridY;

            // Change the alpha of the lines if transparent is true
            alphaLeft = transparentLeft ? gridY * 10 : 100;
            alphaRight = transparentRight ? 100 - gridY * 10 : 100;
            // Change the colour of the lienes
            colorLeft = color(hue(colorLeft), saturation(colorLeft), brightness(colorLeft), alphaLeft);
            colorRight = color(hue(colorRight), saturation(colorRight), brightness(colorRight), alphaRight);

            let choice = Math.floor(random(0, 2));
            
			if(choice == 0){
                stroke(colorLeft);
				line(posX, posY, posX + (width / noOfTiles) / 2, posY + height / noOfTiles);
                line(posX + (width / noOfTiles) / 2, posY, posX + (width / noOfTiles), posY + height / noOfTiles);
			} else {
                stroke(colorRight);
				line(posX, posY + width / noOfTiles, posX + (height / noOfTiles) / 2, posY);
                line(posX + (height / noOfTiles) / 2, posY + width / noOfTiles, posX + (height / noOfTiles), posY);
			}
		}
	}
}

function mousePressed() {
  actRandomSeed = random(100000);
}
```

## Step 5

```js
'use strict';

let noOfTiles;
var actRandomSeed = 0;
var colorLeft;
var colorRight;
var alphaLeft = 0;
var alphaRight = 100;
var transparentLeft = false;
var transparentRight = false;


function setup(){
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100, 100);
    colorLeft = color(241, 13, 44, alphaLeft);
    colorRight = color(152, 249, 236, alphaRight);
}

function draw(){
    background(360, 0, 50);
    strokeWeight(mouseX / 15);
    randomSeed(actRandomSeed);
    // Change the nimber of tiles
    noOfTiles = mouseX / 15;

	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){

            let posX = width / noOfTiles * gridX;
            let posY = height / noOfTiles * gridY;

            alphaLeft = transparentLeft ? gridY * 10 : 100;
            alphaRight = transparentRight ? 100 - gridY * 10 : 100;

            colorLeft = color(hue(colorLeft), saturation(colorLeft), brightness(colorLeft), alphaLeft);
            colorRight = color(hue(colorRight), saturation(colorRight), brightness(colorRight), alphaRight);

            let choice = Math.floor(random(0, 2));
            
			if(choice == 0){
                stroke(colorLeft);
				line(posX, posY, posX + (width / noOfTiles) / 2, posY + height / noOfTiles);
                line(posX + (width / noOfTiles) / 2, posY, posX + (width / noOfTiles), posY + height / noOfTiles);
			} else {
                stroke(colorRight);
				line(posX, posY + width / noOfTiles, posX + (height / noOfTiles) / 2, posY);
                line(posX + (height / noOfTiles) / 2, posY + width / noOfTiles, posX + (height / noOfTiles), posY);
			}
		}
	}
}

function mousePressed() {
  actRandomSeed = random(100000);
}

// Function that saves the canvas and changes the colour and transparency when keys are pressed
function keyReleased() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
    
    if (key == '1') {
        if (colorsEqual(colorLeft, color(299, 73, 51, alphaLeft))) {
            colorLeft = color(323, 100, 77, alphaLeft);
        } else {
            colorLeft = color(299, 73, 51, alphaLeft);
        }
    }

    if (key == '2') {
        if (colorsEqual(colorRight, color(300, 50, 100, alphaRight))) {
            colorRight = color(192, 100, 100, alphaRight);
        } else {
            colorRight = color(300, 50, 100, alphaRight);
        }
    }
    // Make the tiles transparent
    if (key == '3') {
        transparentLeft = !transparentLeft;
    }
    if (key == '4') {
        transparentRight = !transparentRight;
    }
    
    // Bring the tiles to the original colour
    if (key == '5') {
        transparentLeft = false;
        transparentRight = false;
        colorLeft = color(241, 13, 44, alphaLeft);
        colorRight = color(152, 249, 236, alphaRight);
    }
}

// Function that changes the colours to string
function colorsEqual(col1, col2) {
    return col1.toString() == col2.toString();
}
```

![](../images/shapes_06a.PNG?raw=true "")
![](../images/shapes_06b.PNG?raw=true "")
![](../images/shapes_06c.PNG?raw=true "")