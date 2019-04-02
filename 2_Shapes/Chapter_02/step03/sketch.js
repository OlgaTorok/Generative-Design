'use strict';

let angle, radius, offset;

function setup(){
    createCanvas(500, 500);
    background(0);
    angleMode(DEGREES);
    strokeWeight(1);
    noFill();
}

function draw(){

    // Use the mouse to draw the shapes
	if(mouseIsPressed && mouseButton == LEFT){
		translate(width/2, height/2);
		stroke(255, 25);

        // Map the mouseY to a smaller number
        offset = int(map(mouseY, 0, height, 2, 10));
        // Set the radius of the shape using mouseX
		radius = mouseX - width / 2;
        angle = 360 / offset;

		beginShape();
		for(let i = 0; i < offset; i++){
			let posX = cos(angle * i + offset) * abs(radius);
			let posY = sin(angle * i + offset) * abs(radius);
			vertex(posX, posY);
		}
		endShape(CLOSE);
	}
}

// Save the canvas as png file
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
    if (keyCode == DELETE || keyCode == BACKSPACE) background(0);
}
