'use strict';

let noOfTiles = 10;
let tileWidth;
let shapes;
let shapeSize = 40;
// Declare the angle
let shapeAngle = 0;

function preload(){
    shapes =[];
    shapes.push(loadImage('../img/SVG/star.svg'));
}

function setup(){
    createCanvas(500, 500);
    imageMode(CENTER);
    angleMode(DEGREES); // Set the angle mode for the rotation
    
	tileWidth = width / noOfTiles;
}

function draw(){
	background(0);

	for(let gridY = 0; gridY < noOfTiles; gridY++){
		for(let gridX = 0; gridX < noOfTiles; gridX++){

			let posX = gridX * tileWidth + tileWidth / 2;
            let posY = gridY * tileWidth + tileWidth / 2;

            // Calculate the angle between the mouse position the shape
            var angle = atan2(mouseY - posY, mouseX - posX) + 20;

			fill(0);
			stroke(255);
			strokeWeight(3);

			push();
            translate(posX, posY);
            rotate(angle);	// Rotate to 45 degrees
			image(shapes[0], 0, 0, shapeSize, shapeSize);
			pop();
		}
	}
}

// Save the canvas
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
