'use strict';

let noOfTiles = 15;
// Add random seed
var actRandomSeed = 0;


function setup(){
	createCanvas(500, 500);
}

function draw(){
    background(128);
    // Draws every second but on the same pattern - used instead of noLoop()
    randomSeed(actRandomSeed);

	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){

            let posX = width / noOfTiles * gridX;
            let posY = height / noOfTiles * gridY;

            let choice = Math.floor(random(0, 2));
            
			if(choice == 0){
				line(posX, posY, posX + (width / noOfTiles) / 2, posY + height / noOfTiles);
                line(posX + (width / noOfTiles) / 2, posY, posX + (width / noOfTiles), posY + height / noOfTiles);
			} else {
				line(posX, posY + width / noOfTiles, posX + (height / noOfTiles) / 2, posY);
                line(posX + (height / noOfTiles) / 2, posY + width / noOfTiles, posX + (height / noOfTiles), posY);
			}
		}
	}
}

// If the mouse is pressed the lines change position
function mousePressed() {
  actRandomSeed = random(100000);
}