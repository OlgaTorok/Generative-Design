'use strict';

let noOfTiles;
var actRandomSeed = 0;
var colorLeft;
var colorRight;
var alphaLeft = 0;
var alphaRight = 100;
var transparentLeft = false;
var transparentRight = false;


function setup(){
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100, 100);
    colorLeft = color(241, 13, 44, alphaLeft);
    colorRight = color(152, 249, 236, alphaRight);
}

function draw(){
    background(360, 0, 50);
    strokeWeight(mouseX / 15);
    randomSeed(actRandomSeed);
    // Change the number of tiles
    noOfTiles = mouseX / 15;

	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){

            let posX = width / noOfTiles * gridX;
            let posY = height / noOfTiles * gridY;

            alphaLeft = transparentLeft ? gridY * 10 : 100;
            alphaRight = transparentRight ? 100 - gridY * 10 : 100;

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

// Function that saves the canvas and changes the colour and transparency when keys are pressed
function keyReleased() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
    
    if (key == '1') {
        if (colorsEqual(colorLeft, color(299, 73, 51, alphaLeft))) {
            colorLeft = color(323, 100, 77, alphaLeft);
        } else {
            colorLeft = color(299, 73, 51, alphaLeft);
        }
    }

    if (key == '2') {
        if (colorsEqual(colorRight, color(300, 50, 100, alphaRight))) {
            colorRight = color(192, 100, 100, alphaRight);
        } else {
            colorRight = color(300, 50, 100, alphaRight);
        }
    }
    // Make the tiles transparent
    if (key == '3') {
        transparentLeft = !transparentLeft;
    }
    if (key == '4') {
        transparentRight = !transparentRight;
    }
    
    // Bring the tiles to the original colour
    if (key == '5') {
        transparentLeft = false;
        transparentRight = false;
        colorLeft = color(241, 13, 44, alphaLeft);
        colorRight = color(152, 249, 236, alphaRight);
    }
}

// Function that changes the colours to string
function colorsEqual(col1, col2) {
    return col1.toString() == col2.toString();
}