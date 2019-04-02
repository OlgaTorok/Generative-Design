[Shapes](../)

# 10. Using slider and rotation of shapes in a grid

## Step 1

```js
'use strict';

// Declare variables for grid and shape
let noOfTiles = 10;
let tileWidth;
let img;
let actRandomSeed = 1000;

// Preload the svg file
function preload(){
	img = loadImage('../img/star.svg');
}

function setup(){
	createCanvas(500, 500);
	imageMode(CENTER);  //Set image mode to center
	tileWidth = width / noOfTiles; // the width of the tiles
}

function draw(){
	background(0);
	randomSeed(actRandomSeed);
    // Translate to grid
	translate(tileWidth/2, tileWidth/2);

	// Create a grid that will contain a list of shapes
    for (let gridY = 0; gridY < noOfTiles; gridY++) {
  	  	for (let gridX = 0; gridX < noOfTiles; gridX++) {
            // Set the x ad y position
	  		let posX = gridX * tileWidth;
            let posY = gridY * tileWidth;
            
			push();
			translate(posX, posY);
			image(img, 0, 0, tileWidth - 20, tileWidth - 20);
			pop();
  	  	}
  	}
}
```

## Step 2

```js
'use strict';

let noOfTiles = 10;
let tileWidth;
let img;
let actRandomSeed = 1000;
// Declare the radius
let minRadius = 1;
let maxRadius = 100;
// Declare the slider
let mySlider;

function preload(){
	img = loadImage('../img/star.svg');
}

function setup(){
	createCanvas(500, 500);
    imageMode(CENTER);
    // Add the slider to canvas
    mySlider = createSlider(3, 50, 3);
	mySlider.position(10, 10);
    mySlider.style('width', '180px');
}

function draw(){
	background(0);
    randomSeed(actRandomSeed);
    
    // Set the number of tiles to the slider value
    noOfTiles = mySlider.value();
    tileWidth = width / noOfTiles; // the width of the tiles
    
	translate(tileWidth/2, tileWidth/2);

    for (let gridY = 0; gridY < noOfTiles; gridY++) {
  	  	for (let gridX = 0; gridX < noOfTiles; gridX++) {
	  		let posX = gridX * tileWidth;
            let posY = gridY * tileWidth;
            
			push();
			translate(posX, posY);
			image(img, 0, 0, tileWidth - 20, tileWidth - 20);
			pop();
  	  	}
  	}
}
```

## Step 3

```js
'use strict';

let noOfTiles = 10;
let tileWidth;
// Declare the angle
let angle = 0;

let img;
let actRandomSeed = 1000;
let minRadius = 1;
let maxRadius = 100;
let mySlider;

function preload(){
	img = loadImage('../img/star.svg');
}

function setup(){
	createCanvas(500, 500);
    imageMode(CENTER);
    angleMode(DEGREES); // Set the angle mode to degrees

    mySlider = createSlider(3, 50, 3);
	mySlider.position(10, 10);
    mySlider.style('width', '180px');
}

function draw(){
	background(0);
    randomSeed(actRandomSeed);
    
    noOfTiles = mySlider.value();
    tileWidth = width / noOfTiles;
    
	translate(tileWidth/2, tileWidth/2);

    for (let gridY = 0; gridY < noOfTiles; gridY++) {
  	  	for (let gridX = 0; gridX < noOfTiles; gridX++) {

	  		let posX = gridX * tileWidth;
            let posY = gridY * tileWidth;
            // Set the angle for shapes to follow the mouse
            angle = atan2((mouseY - posY),(mouseX -posX));
            
			push();
            translate(posX, posY);
            rotate(angle);  // Rotate the shapes
			image(img, 0, 0, tileWidth - 20, tileWidth - 20);
			pop();
  	  	}
  	}
}

// Save canvas
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), '.png');
}
```

![](../images/shapes_10a.PNG?raw=true "")
![](../images/shapes_10b.PNG?raw=true "")
![](../images/shapes_10c.PNG?raw=true "")