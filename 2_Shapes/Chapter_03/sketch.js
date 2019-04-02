'use strict';

let angle, radius,offset, strokeColor;

function setup(){
    createCanvas(500, 500);
    background(0);
    angleMode(DEGREES);
    strokeWeight(2);
    noFill();
    // Assign a colour to the stroke
    strokeColor = color(255, 10);
}

function draw(){

	if(mouseIsPressed && mouseButton == LEFT){
        translate(width/2, height/2);
        // Add the new stroke colour
		stroke(strokeColor);

		// radius = map(mouseX, width/2, width, 1, 150);
		offset = int(map(mouseY, 0, height, 2, 10));
		radius = mouseX - width / 2;
		angle = 360 / offset;

		beginShape();
        for (let i = 0; i < offset; i++){
			let posX = cos(angle * i + offset) * abs(radius);
			let posY = sin(angle * i + offset) * abs(radius);
			vertex(posX, posY);
		}
		endShape(CLOSE);
	}
}

// Function added to save the change the colour of the shapes when keys 2, 3 and 4 are pressed
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
    if (keyCode == DELETE || keyCode == BACKSPACE) background(0);
	if (key == '1') strokeColor = color(255, 25);
	if (key == '2') strokeColor = color(31, 255, 255, 25);
	if (key == '3') strokeColor = color(255, 31, 143, 25);
	if (key == '4') strokeColor = color(31, 255, 31, 25);
}
