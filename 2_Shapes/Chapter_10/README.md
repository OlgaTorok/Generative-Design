[Shapes](../)

# 10. Changing shape positions in a grid

In this sketch the shapes are following the movement of the mouse, and the mouse click changes the shape position to a random location.

## Step 1

[Test](step01/)

```js
'use strict';

// Declare variables for grid and circle radius
let noOfTiles = 10;
let tileWidth;
let circleRadiusBig = 40;

function setup(){
	createCanvas(500, 500);
    // Set the width of the tiles
	tileWidth = width / noOfTiles; // the width of the tiles
}

function draw(){
    background(123);
    noStroke();
    // Translate to tile
	translate(tileWidth/2, tileWidth/2);

	// Create a grid for the big circles
    for (let gridY = 0; gridY < noOfTiles; gridY++) {
  	  	for (let gridX = 0; gridX < noOfTiles; gridX++) {
            // Set x and y position for the big circles
	  		let posX = gridX * tileWidth;
		  	let posY = gridY * tileWidth;
            
            // Draw the big circles with no stroke
            fill(0);
			ellipse(posX, posY, circleRadiusBig, circleRadiusBig);
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
let circleRadiusBig = 40;
let circleRadiusSmall = 20;

function setup(){
	createCanvas(500, 500);
	tileWidth = width / noOfTiles;
}

function draw(){
    background(123);
    noStroke();

	translate(tileWidth/2, tileWidth/2);

    for (let gridY = 0; gridY < noOfTiles; gridY++) {
  	  	for (let gridX = 0; gridX < noOfTiles; gridX++) {

	  		let posX = gridX * tileWidth;
            let posY = gridY * tileWidth;
            
            fill(0);
			ellipse(posX, posY, circleRadiusBig, circleRadiusBig);
  	  	}
    }

	// Create a grid for the white circles and draw them on top of the big ones
    for (let gridY = 0; gridY < noOfTiles; gridY++) {
        for (let gridX = 0; gridX < noOfTiles; gridX++) {
            // Set the x and y position for the white circles
            let posX = gridX * tileWidth;
            let posY = gridY * tileWidth;

            fill(255);
            ellipse(posX, posY, circleRadiusSmall, circleRadiusSmall);
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
let circleRadiusBig = 40;
let circleRadiusSmall = 20;
// Declare the ransom seed
let actRandomSeed = 0;

function setup(){
	createCanvas(500, 500);
	tileWidth = width / noOfTiles;
}

function draw(){
    background(123);
    noStroke();
    randomSeed(actRandomSeed);  // Set random seed instead of noLoop()

	translate(tileWidth/2, tileWidth/2);

    for (let gridY = 0; gridY < noOfTiles; gridY++) {
  	  	for (let gridX = 0; gridX < noOfTiles; gridX++) {

	  		let posX = gridX * tileWidth;
            let posY = gridY * tileWidth;
            
            // Add shift position for the big circles
            let shiftX = random(-1, 1) * mouseX / 20;
			let shiftY = random(-1, 1) * mouseY / 20;
            
            fill(0);
            // Add the sift to the x and y position
			ellipse(posX + shiftX, posY  + shiftY, circleRadiusBig, circleRadiusBig);
  	  	}
    }

    for (let gridY = 0; gridY < noOfTiles; gridY++) {
        for (let gridX = 0; gridX < noOfTiles; gridX++) {
            let posX = gridX * tileWidth;
            let posY = gridY * tileWidth;

            fill(255);
            ellipse(posX, posY, circleRadiusSmall, circleRadiusSmall);
        }
    }
}

// Change circles position in the grid
function mousePressed() {
    actRandomSeed = random(100000);
}

// Save canvas
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), '_mouseX_' + mouseX + '_mouseY_' + mouseY +'.png');
}
```

Results:

![Circles](../images/shapes_09a.png?raw=true "Circles")
![Circles](../images/shapes_09b.png?raw=true "Circles")