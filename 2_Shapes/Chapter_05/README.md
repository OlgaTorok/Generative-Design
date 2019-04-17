[Shapes](../)

# 5. Changing stroke weight on diagonals in a grid with colors

This sketch is similar to Chapter 4, with the exception that the line colour and opacity can be changed using the keys 4, 5 and 6.

## Step 1

[Test](step01/)

```js
'use strict';

// Declare variables for tiles
let noOfTiles = 15;
let tileWidth;


function setup(){
	createCanvas(500, 500);
}

function draw(){
    background(123);
    noLoop();
    
	tileWidth = width / noOfTiles;	// the width of the tiles

    // create a grid that will contain a list of lines
	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){

			// we use push and pop so the individual shapes are drawn at the appropriate location without overlapping
			push();
			// translate the tiles so lines fit in the grid
			translate(gridX * tileWidth + tileWidth/2, gridY * tileWidth + tileWidth/2);
			// Add a random number so the type of lines are drawn randomly on the page
			let choice = Math.floor(random(0, 2));
			// if the random number is 0 then draw the line to the right else to the left
			if(choice == 0){
				// draw the left slanting line
				line(-tileWidth/2, tileWidth/2, tileWidth/2, -tileWidth/2);
			} else {
				// draw the right slanting line
				line(-tileWidth/2, -tileWidth/2, tileWidth/2, tileWidth/2);
			}
			pop();
		}
	}
}
```

## Step 2

[Test](step02/)

```js
'use strict';

let noOfTiles = 15;
let tileWidth;
// Add the random seed
let actRandomSeed = 100;
// Add a stroke cap for the line
let cap;

function setup(){
	createCanvas(500, 500);
    // Define the strokeCap
    cap = ROUND;
}

function draw(){
    background(123);
    // Draws every second but on the same pattern - used instead of noLoop()
    randomSeed(actRandomSeed);
    strokeCap(cap);
    
	tileWidth = width / noOfTiles;

	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){

			push();
            translate(gridX * tileWidth + tileWidth/2, gridY * tileWidth + tileWidth/2);
            
			let choice = Math.floor(random(0, 2));
			if(choice == 0){
                // change the stroke using the mouse x position
                strokeWeight(mouseX / 15);
			    line(-tileWidth/2, tileWidth/2, tileWidth/2, -tileWidth/2);
			} else {
                // change the stroke using the mouse y position
				strokeWeight(mouseY / 15);
				line(-tileWidth/2, -tileWidth/2, tileWidth/2, tileWidth/2);
			}
			pop();
		}
	}
}

// Add funyion that saves the canvas and changes the stroke
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'line_pattern.' +  'png');
    // if keys 1, 2 and 3 are pressed the strokeCap is changing
    if (key == '1') cap = SQUARE;
    if (key == '2') cap = ROUND;
    if (key == '3') cap = PROJECT;
}
```

## Step 3

[Test](step03/)

```js
'use strict';

let noOfTiles = 15;
let tileWidth;
let actRandomSeed = 100;
let cap;
// Declaring variables for colours
let colorLeft;
let colorRight;
let alphaLeft = 255;
let alphaRight = 255;

function setup(){
	createCanvas(500, 500);
    cap = ROUND;
    // Add the color for the left and right lines
    colorLeft = color(246, 84, 106, alphaLeft);
    colorRight = color(84, 246, 224, alphaRight);
}

function draw(){
    background(128,128,128);
    randomSeed(actRandomSeed);
    strokeCap(cap);
    
	tileWidth = width / noOfTiles;

	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){

			push();
            translate(gridX * tileWidth + tileWidth/2, gridY * tileWidth + tileWidth/2);
            let choice = Math.floor(random(0, 2));
            
			if(choice == 0){
                // Add the stroke colour for the left lines
                stroke(colorLeft);
                strokeWeight(mouseX / 15);
				line(-tileWidth/2, tileWidth/2, tileWidth/2, -tileWidth/2);
			} else {
                // Add the stroke colour for the right lines
                stroke(colorRight);
				strokeWeight(mouseY / 15);
				line(-tileWidth/2, -tileWidth/2, tileWidth/2, tileWidth/2);
			}
			pop();
		}
	}
}

// If mouse is pressed the position of the lines changes
function mousePressed() {
    actRandomSeed = random(100000);
}


// Add function that saves the canvas, changes the stroke and teh colour
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'line_pattern.' +  'png');
    if (key == '1') cap = SQUARE;
    if (key == '2') cap = ROUND;
    if (key == '3') cap = PROJECT;

    // Change colours if the keys 4 is pressed
    if (key == "4") {
        colorLeft = color(221, 0, 215, alphaLeft);
        colorRight = color(240, 129,15, alphaRight);
    }

    // If the key 5 is pressed add alpha value to the colour
    if (key == '5') {
        if (alphaLeft == 255) {
            alphaLeft = 127;
        } else {
            alphaLeft = 255;
        }
        colorLeft = color(red(colorLeft), green(colorLeft), blue(colorLeft), alphaLeft);
    }

    // Go back to the original colour when key 6 is pressed
    if (key == "6") {
        colorLeft = color(246, 84, 106, alphaLeft);
        colorRight = color(84, 246, 224, alphaRight);
    }
}
```

Results:

![Changing lines](../images/shapes_05a.png?raw=true "Changing lines")
![Changing lines](../images/shapes_05d.png?raw=true "Changing lines")
![Changing lines](../images/shapes_05b.png?raw=true "Changing lines")
![Changing lines](../images/shapes_05c.png?raw=true "Changing lines")
![Changing lines](../images/shapes_05e.png?raw=true "Changing lines")
![Changing lines](../images/shapes_05f.png?raw=true "Changing lines")

