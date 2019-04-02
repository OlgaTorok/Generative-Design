'use strict';

let noOfTiles = 20;
let tileWidth;

function setup(){
	createCanvas(500, 500);
}

function draw(){
    background(123);
    // Draws every second but on the same pattern - use instead of noLoop()
	randomSeed(100);
    
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
                // change the stroke using the mouse x position
				strokeWeight(mouseX / 20);
				line(-tileWidth/2, tileWidth/2, tileWidth/2, -tileWidth/2);
			} else {
                // change the stroke using the mouse y position
				strokeWeight(mouseY / 20);
				line(-tileWidth/2, -tileWidth/2, tileWidth/2, tileWidth/2);
			}
			pop();
		}
	}
}