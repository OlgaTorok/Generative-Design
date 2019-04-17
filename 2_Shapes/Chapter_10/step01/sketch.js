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