'use strict';

let noOfTiles = 15;
var actRandomSeed = 0;
// Declare variables for colour
var colorLeft;
var colorRight;
var alphaLeft = 100;
var alphaRight = 100;


function setup(){
	createCanvas(500, 500);

    // Add the color for the left and right lines
    colorLeft = color(241, 13, 44, alphaLeft);
    colorRight = color(152, 249, 236, alphaRight);
}

function draw(){
    background(128);
    randomSeed(actRandomSeed);

	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){

            let posX = width / noOfTiles * gridX;
            let posY = height / noOfTiles * gridY;

            let choice = Math.floor(random(0, 2));
            
			if(choice == 0){
                // Add the stroke colour for the left lines
                stroke(colorLeft);
				line(posX, posY, posX + (width / noOfTiles) / 2, posY + height / noOfTiles);
                line(posX + (width / noOfTiles) / 2, posY, posX + (width / noOfTiles), posY + height / noOfTiles);
			} else {
                // Add the stroke colour for the right lines
                stroke(colorRight);
				line(posX, posY + width / noOfTiles, posX + (height / noOfTiles) / 2, posY);
                line(posX + (height / noOfTiles) / 2, posY + width / noOfTiles, posX + (height / noOfTiles), posY);
			}
		}
	}
}

function mousePressed() {
  actRandomSeed = random(100000);
}