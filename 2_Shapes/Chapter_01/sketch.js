'use strict';

let stk;
let circleRes = 10;
let angle;
let radius;

function setup(){
	createCanvas(500, 500);
	angleMode(DEGREES);
}

function draw(){
	background(0);
	strokeWeight(stk);
	stroke(255);
	translate(width/2, height/2);

	// Map the radius of the line to mouseX and 150 pixels in length
	radius = map(mouseX, width/2, width, 1, 150);
	// Map the resolution of the circle to mouseY and ,maximum of 20 lines
	circleRes = int(map(mouseY, 0, height, 2, 20));
	// Map the stroke of the line to mouseY using the height of the canvas
	stk = int(map(mouseY, 0, height, 20, 2));

	angle = 360/circleRes;

	for(let i = 0; i < circleRes; i++){
		let posX = cos(angle * i) * abs(radius);
		let posY = sin(angle * i) * abs(radius);
		line(0, 0, posX, posY);
	}
}

function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

}
