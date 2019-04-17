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