'use strict';

let noOfTiles = 20;
let tileWidth, tileHeight;
// Declare the angle
let shapeAngle = 0;

function setup(){
    createCanvas(500, 500);
    // Set the angle mode to degrees for the rotation
    angleMode(DEGREES);	
}

function draw(){
    background(123);

	tileWidth = width / noOfTiles;
	tileHeight = height / noOfTiles;

	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){

			var posX = tileWidth * gridX + tileWidth / 2;
            var posY = tileHeight * gridY + tileWidth / 2;

            // Calculate the angle between the mouse position and shape position
            var angle = atan2(mouseY - posY, mouseX - posX) + (shapeAngle * (PI / 180));

			fill(0);
			stroke(255);
			strokeWeight(5);

			push();
            translate(posX, posY);
            scale(0.5, 0.6);
            // Rotate the shapes to follow the mouse
            rotate(angle);
			line(-tileWidth/2, tileWidth/2, tileWidth/2, -tileWidth/2);
			pop();
		}
	}
}

// Save canvas
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}