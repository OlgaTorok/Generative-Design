'use strict';

// Declare variables for the shape's location, angle and size
let offset = 50;
let angle = 10;
let radius = 200;

function setup(){
    createCanvas(500, 500);
    background(0);
    strokeWeight(1);
    noFill();
}

function draw(){
		translate(width/2, height/2);
		stroke(255, 25);

        beginShape();
        // Using the offset create many shapes
		for(let i = 0; i < offset; i++){
            // Set the x and y position of the shapes
			let posX = cos(angle * i + offset) * abs(radius);
            let posY = sin(angle * i + offset) * abs(radius);
            // Draw the shape
			vertex(posX, posY);
		}
		endShape(CLOSE);
}