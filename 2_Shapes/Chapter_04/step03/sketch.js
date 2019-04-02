'use strict';

let noOfTiles = 20;
let tileWidth;
// Add a stroke cap for the line
let cap;

function setup(){
	createCanvas(500, 500);
    // Define the strokeCap
	cap = ROUND;
}

function draw(){
    background(123);
    randomSeed(100);
    // Add the stroke cap
    strokeCap(cap);
    
	tileWidth = width / noOfTiles;

	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){
			fill(0);
			stroke(255);
			strokeWeight(10);

			push();
			translate(gridX * tileWidth + tileWidth/2, gridY * tileWidth + tileWidth/2);
			let choice = Math.floor(random(2));
			if(choice == 0){
				strokeWeight(mouseX / 20);
				line(-tileWidth/2, tileWidth/2, tileWidth/2, -tileWidth/2);
			} else {
				strokeWeight(mouseY / 20);
				line(-tileWidth/2, -tileWidth/2, tileWidth/2, tileWidth/2);
			}
			pop();
		}
	}
}

// Add the function that saves the canvas and changes the stroke cap of the lines
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
		// if keys 1, 2 and 3 are pressed the strokeCap is changing
		if (key == 1) cap = SQUARE;
		if (key == 2) cap = ROUND;
		if (key == 3) cap = PROJECT;
}