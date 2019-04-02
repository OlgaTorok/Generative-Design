'use strict';

let noOfTiles = 15;
let tileWidth;
// Add the random seed
let actRandomSeed = 100;
// Add a stroke cap for the line
let cap;

function setup(){
	createCanvas(500, 500);
    // Define the strokeCap
    cap = ROUND;
}

function draw(){
    background(123);
    // Draws every second but on the same pattern - used instead of noLoop()
    randomSeed(actRandomSeed);
    strokeCap(cap);
    
	tileWidth = width / noOfTiles;

	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){

			push();
            translate(gridX * tileWidth + tileWidth/2, gridY * tileWidth + tileWidth/2);
            
			let choice = Math.floor(random(0, 2));
			if(choice == 0){
                // change the stroke using the mouse x position
                strokeWeight(mouseX / 15);
				line(-tileWidth/2, tileWidth/2, tileWidth/2, -tileWidth/2);
			} else {
                // change the stroke using the mouse y position
				strokeWeight(mouseY / 15);
				line(-tileWidth/2, -tileWidth/2, tileWidth/2, tileWidth/2);
			}
			pop();
		}
	}
}

// Add funyion that saves the canvas and changes the stroke
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'line_pattern.' +  'png');
    // if keys 1, 2 and 3 are pressed the strokeCap is changing
    if (key == '1') cap = SQUARE;
    if (key == '2') cap = ROUND;
    if (key == '3') cap = PROJECT;
}