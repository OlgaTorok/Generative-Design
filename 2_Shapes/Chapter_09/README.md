[Shapes](../)

# 9. Changing size and position of circles in a grid

In this sketch, the circles in the grid are changing location and size depending on the mouse position.

## Step 1

[Test](step01/)

```js
'use strict';

let noOfTiles = 10;
let tileWidth;

function setup(){
    createCanvas(500, 500);
    tileWidth = width / noOfTiles; // The width of the tiles
}

function draw(){
    background(123);
    // Translate grid to half tile width
    translate(tileWidth/2, tileWidth/2);
    
	// Create a grid that will contain a list of shapes
    for (let gridY = 0; gridY < noOfTiles; gridY++) {
        for (let gridX = 0; gridX < noOfTiles; gridX++) {
            // Set the x and y position for the shape
            let posX = gridX * tileWidth;
            let posY = gridY * tileWidth;
            // Draw the shape
            ellipse(posX, posY, 10, 10);
        }
    }
}
```

## Step 2

[Test](step02/)

```js
'use strict';

let noOfTiles = 10;
let tileWidth;
// Declare the angle and stroke colour
let shapeAngle = 0;
let strokeColor;

function setup(){
    createCanvas(500, 500);
    angleMode(DEGREES); // Set the angle mode to degrees
    strokeColor = color(255, 123);  // Set the stroke colour
    tileWidth = width / noOfTiles;
}

function draw(){
    background(123);
    translate(tileWidth/2, tileWidth/2);
    
    for (let gridY = 0; gridY < noOfTiles; gridY++) {
        for (let gridX = 0; gridX < noOfTiles; gridX++) {
            
            let posX = gridX * tileWidth;
            let posY = gridY * tileWidth;

            // Set the circular radius of the shape for mouse y
            let circleRadius = map(constrain(mouseY, 0, width, 0, 100), 0, width, 1, 60);
		    let circleStroke = map(constrain(mouseY, 0, height, 1, 5), 0, height, 1, 10);

            noFill();   // No fill set
            // Set stroke weight and colour
            stroke(strokeColor); 
            strokeWeight(circleStroke);
            // Use new circle radius
            ellipse(posX, posY, circleRadius, circleRadius);
        }
    }
}
```

## Step 3

[Test](step03/)

```js
'use strict';

let noOfTiles = 10;
let tileWidth;
let shapeAngle = 0;
let strokeColor;
// Declare random seed
let actRandomSeed = 0;

function setup(){
    createCanvas(500, 500);
    angleMode(DEGREES);
    strokeColor = color(255, 123);
    tileWidth = width / noOfTiles;
}

function draw(){
    background(123);
    randomSeed(actRandomSeed);  // Random seed used instead of noLoop()

    translate(tileWidth/2, tileWidth/2);
    
    for (let gridY = 0; gridY < noOfTiles; gridY++) {
        for (let gridX = 0; gridX < noOfTiles; gridX++) {
            
            let posX = gridX * tileWidth;
            let posY = gridY * tileWidth;

            // Set the shift variables for the shapes
            let shiftX = random(-mouseX, mouseX) / 20;
            let shiftY = random(-mouseX, mouseX) / 20;

            let circleRadius = map(constrain(mouseY, 0, width, 0, 100), 0, width, 1, 60);
		    let circleStroke = map(constrain(mouseY, 0, height, 1, 5), 0, height, 1, 10);

            noFill(); 
            stroke(strokeColor); 
            strokeWeight(circleStroke);
            // Add the shift to the x and y position
            ellipse(posX + shiftX, posY + shiftY, circleRadius, circleRadius);
        }
    }
}

// Change the position of shapes if mouse is pressed
function mousePressed() {
    actRandomSeed = random(100000);
}

// Save the canvas
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), '_mouseX_' + mouseX + '_mouseY_' + mouseY +'.png';
}
```

Results:

![Circles](../images/shapes_08c.png?raw=true "Circles")
![Circles](../images/shapes_08d.png?raw=true "Circles")