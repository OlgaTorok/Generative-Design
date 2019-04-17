[Shapes](../)

# 8. SVG shapes in a grid, that are always facing the mouse

In this sketch, SVG shapes are used to follow the mouse.

## Step 1

[Test](step01/)

```js
// Declare variables for tiles
let noOfTiles = 10;
let tileWidth;
let shapes;
let shapeSize = 40;

// Preload the svg file and create an array of shapes
function preload(){
    shapes =[];
    shapes.push(loadImage('../img/SVG/star.svg'));
}

function setup(){
    createCanvas(500, 500);
    // Set the image to center
	imageMode(CENTER);
    // Set the tile width
	tileWidth = width / noOfTiles;
}

function draw(){
	background(0);


    // Create a grid that will contain a list of objects
	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){
            // Set the x and y position of the objects using the grid and the tile width
			let posX = gridX * tileWidth + tileWidth / 2;
            let posY = gridY * tileWidth + tileWidth / 2;

			// Fill and give the shapes stroke and weight
			fill(0);
			stroke(255);
			strokeWeight(3);

			// We use push and pop so the indivisual shapes are drawn at the appropraiate location without overlapping
			push();
			// Translate the tiles so they sit in the grid
            translate(posX, posY);
            // Add the image to the grid
			image(shapes[0], 0, 0, shapeSize, shapeSize);
			pop();
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
let shapes;
let shapeSize;
// Declare the angle
let shapeAngle = 0;

function preload(){
    shapes =[];
    shapes.push(loadImage('../img/SVG/star.svg'));
}

function setup(){
    createCanvas(500, 500);
    imageMode(CENTER);
    angleMode(DEGREES); // Set the angle mode for the rotation
    
	tileWidth = width / noOfTiles;
}

function draw(){
	background(0);

	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){

			let posX = gridX * tileWidth + tileWidth / 2;
            let posY = gridY * tileWidth + tileWidth / 2;

            // Calculate the angle between the mouse position the shape
            var angle = atan2(mouseY - posY, mouseX - posX) + 20;

			fill(0);
			stroke(255);
			strokeWeight(3);

			push();
            translate(posX, posY);
            rotate(angle);	// Rotate to 45 degrees
			image(shapes[0], 0, 0, shapeSize, shapeSize);
			pop();
		}
	}
}

// Save the canvas
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
```

Result:

![SVG shapes](../images/shapes_07b.png?raw=true "SVG shapes")

