[Shapes](../)

# 4. Changing stroke weight and stroke caps in a grid

## Step 1

```js
'use strict';

// Declare variables for tiles
let noOfTiles = 20;
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
			// fill and give the shapes stroke and weight
			fill(0);
			stroke(255);
			strokeWeight(10);

			// we use push and pop so the individual shapes are drawn at the appropriate location without overlapping
			push();
			// translate the tiles so if lines are rotated they fit in the grid
			translate(gridX * tileWidth + tileWidth/2, gridY * tileWidth + tileWidth/2);
			// Add a random number so the type of lines are drawn randomly on the page
			let choice = Math.floor(random(2));
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

```js
'use strict';

let noOfTiles = 20;
let tileWidth;

function setup(){
	createCanvas(500, 500);
}

function draw(){
    background(123);
    // Draws every second but on the same pattern - use instead of noLoop()
	randomSeed(100);
    
	tileWidth = width / noOfTiles;

	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){
			fill(0);
			stroke(255);
			strokeWeight(10);

			push();
			translate(gridX * tileWidth + tileWidth/2, gridY * tileWidth + tileWidth/2);
			let choice = Math.floor(random(2));
			if(choice == 0){
                // change the stroke using the mouse x position
				strokeWeight(mouseX / 20);
				line(-tileWidth/2, tileWidth/2, tileWidth/2, -tileWidth/2);
			} else {
                // change the stroke using the mouse y position
				strokeWeight(mouseY / 20);
				line(-tileWidth/2, -tileWidth/2, tileWidth/2, tileWidth/2);
			}
			pop();
		}
	}
}
```

## Step 3

```js
'use strict';

let noOfTiles = 20;
let tileWidth;
// Add a stroke cap for the line
let cap;

function setup(){
	createCanvas(500, 500);
    // Define the strokeCap
	cap = ROUND;
}

function draw(){
    background(123);
    randomSeed(100);
    // Add the stroke cap
    strokeCap(cap);
    
	tileWidth = width / noOfTiles;

	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){
			fill(0);
			stroke(255);
			strokeWeight(10);

			push();
			translate(gridX * tileWidth + tileWidth/2, gridY * tileWidth + tileWidth/2);
			let choice = Math.floor(random(2));
			if(choice == 0){
				strokeWeight(mouseX / 20);
				line(-tileWidth/2, tileWidth/2, tileWidth/2, -tileWidth/2);
			} else {
				strokeWeight(mouseY / 20);
				line(-tileWidth/2, -tileWidth/2, tileWidth/2, tileWidth/2);
			}
			pop();
		}
	}
}

// Add the function that saves the canvas and changes the stroke cap of the lines
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'line_pattern.' +  'png');
		// if keys 1, 2 and 3 are pressed the strokeCap is changing
		if (key == 1) cap = SQUARE;
		if (key == 2) cap = ROUND;
		if (key == 3) cap = PROJECT;
}
```

![](../images/shapes_04a.png?raw=true "")
![](../images/shapes_04b.PNG?raw=true "")
![](../images/shapes_04c.PNG?raw=true "")
![](../images/shapes_04d.PNG?raw=true "")
