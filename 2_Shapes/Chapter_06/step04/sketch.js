'use strict';

let noOfTiles = 15;
var actRandomSeed = 0;
var colorLeft;
var colorRight;
// Change the alpha
var alphaLeft = 0;
var alphaRight = 100;
// Declare transparency variables
var transparentLeft = false;
var transparentRight = false;


function setup(){
    createCanvas(500, 500);
    // Change colour mode to HSB
    colorMode(HSB, 360, 100, 100, 100);
    colorLeft = color(241, 13, 44, alphaLeft);
    colorRight = color(152, 249, 236, alphaRight);
}

function draw(){
    background(360, 0, 50);
    // Add a stroke using the mouseX
    strokeWeight(mouseX / 15);
    randomSeed(actRandomSeed);

	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){

            let posX = width / noOfTiles * gridX;
            let posY = height / noOfTiles * gridY;

            // Change the alpha of the lines if transparent is true
            alphaLeft = transparentLeft ? gridY * 10 : 100;
            alphaRight = transparentRight ? 100 - gridY * 10 : 100;
            // Change the colour of the lienes
            colorLeft = color(hue(colorLeft), saturation(colorLeft), brightness(colorLeft), alphaLeft);
            colorRight = color(hue(colorRight), saturation(colorRight), brightness(colorRight), alphaRight);

            let choice = Math.floor(random(0, 2));
            
			if(choice == 0){
                stroke(colorLeft);
				line(posX, posY, posX + (width / noOfTiles) / 2, posY + height / noOfTiles);
                line(posX + (width / noOfTiles) / 2, posY, posX + (width / noOfTiles), posY + height / noOfTiles);
			} else {
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

