'use strict';

// Declare variables for tiles
let noOfTiles = 20;
let tileWidth, tileHeight;

function setup(){
    createCanvas(500, 500);
}

function draw(){
    background(123);
    // Set the tile width and height 
	tileWidth = width / noOfTiles;
	tileHeight = height / noOfTiles;

    // Create a grid that will contain the lines
	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){
            // Set the x and y position using the grid and the tile width
			var posX = tileWidth * gridX + tileWidth / 2;
            var posY = tileHeight * gridY + tileWidth / 2;

			// Fill and give the shapes stroke and weight
			fill(0);
			stroke(255);
			strokeWeight(5);

			// We use push and pop so the indivisual shapes are drawn at the appropraiate location without overlapping
			push();
			// Translate the tiles so they sit in the grid
            translate(posX, posY);
            // Scale the shapes for better visualisation
            scale(0.5, 0.6);
			line(-tileWidth/2, tileWidth/2, tileWidth/2, -tileWidth/2);
			pop();
		}
	}
}