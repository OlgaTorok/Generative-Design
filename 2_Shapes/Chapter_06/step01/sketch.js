'use strict';

// Declare variables for tiles
let noOfTiles = 15;


function setup(){
	createCanvas(500, 500);
}

function draw(){
    background(128);
    noLoop();

    // create a grid that will contain a list of lines
	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){

            // Set the x and y position of the lines
            let posX = width / noOfTiles * gridX;
            let posY = height / noOfTiles * gridY;
            // Returns a random number between 0 and 2
            let choice = Math.floor(random(0, 2));
            
            // If the random number is 0 then draw the line to the right else to the left
			if(choice == 0){
                // Draw two right slanting lines at the random positions on the grid
				line(posX, posY, posX + (width / noOfTiles) / 2, posY + height / noOfTiles);
                line(posX + (width / noOfTiles) / 2, posY, posX + (width / noOfTiles), posY + height / noOfTiles);
			} else {
                // Draw two left slanting lines at the random positions on the grid
				line(posX, posY + width / noOfTiles, posX + (height / noOfTiles) / 2, posY);
                line(posX + (height / noOfTiles) / 2, posY + width / noOfTiles, posX + (height / noOfTiles), posY);
			}
		}
	}
}