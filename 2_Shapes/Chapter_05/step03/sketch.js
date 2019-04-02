'use strict';

let noOfTiles = 15;
let tileWidth;
let actRandomSeed = 100;
let cap;
// Declaring variables for colours
let colorLeft;
let colorRight;
let alphaLeft = 255;
let alphaRight = 255;

function setup(){
	createCanvas(500, 500);
    cap = ROUND;
    // Add the color for the left and right lines
    colorLeft = color(246, 84, 106, alphaLeft);
    colorRight = color(84, 246, 224, alphaRight);
}

function draw(){
    background(128,128,128);
    randomSeed(actRandomSeed);
    strokeCap(cap);
    
	tileWidth = width / noOfTiles;

	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){

			push();
            translate(gridX * tileWidth + tileWidth/2, gridY * tileWidth + tileWidth/2);
            let choice = Math.floor(random(0, 2));
            
			if(choice == 0){
                // Add the stroke colour for the left lines
                stroke(colorLeft);
                strokeWeight(mouseX / 15);
				line(-tileWidth/2, tileWidth/2, tileWidth/2, -tileWidth/2);
			} else {
                // Add the stroke colour for the right lines
                stroke(colorRight);
				strokeWeight(mouseY / 15);
				line(-tileWidth/2, -tileWidth/2, tileWidth/2, tileWidth/2);
			}
			pop();
		}
	}
}

// If mouse is pressed the position of the lines changes
function mousePressed() {
    actRandomSeed = random(100000);
}


// Add function that saves the canvas, changes the stroke and teh colour
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
    if (key == '1') cap = SQUARE;
    if (key == '2') cap = ROUND;
    if (key == '3') cap = PROJECT;

    // Change colours if the keys 4 is pressed
    if (key == "4") {
        colorLeft = color(221, 0, 215, alphaLeft);
        colorRight = color(240, 129,15, alphaRight);
    }

    // If the key 5 is pressed add alpha value to the colour
    if (key == '5') {
        if (alphaLeft == 255) {
            alphaLeft = 127;
        } else {
            alphaLeft = 255;
        }
        colorLeft = color(red(colorLeft), green(colorLeft), blue(colorLeft), alphaLeft);
    }

    // Go back to the original colour when key 6 is pressed
    if (key == "6") {
        colorLeft = color(246, 84, 106, alphaLeft);
        colorRight = color(84, 246, 224, alphaRight);
    }
}