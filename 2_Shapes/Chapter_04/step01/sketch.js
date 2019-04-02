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