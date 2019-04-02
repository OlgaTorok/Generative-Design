'use strict';

let stk = 3;
// Add variables for the circle
let circleRes = 10;
let angle;
let radius;

function setup(){
	createCanvas(500, 500);
	// Add an angle mode that returns degrees
	angleMode(DEGREES);
}

function draw(){
	background(0);
	strokeWeight(stk);
	stroke(255);
	translate(width/2, height/2);

	// Set the radius and angle for the lines
	radius = 200;
	angle = 360/circleRes;

	// Add a loop that draws the lines
	for(let i = 0; i < circleRes; i++){
		// Add the x and y position for the end of the line
		// abs() is turning negative numbers into positive
		let posX = cos(angle * i) * abs(radius);
		let posY = sin(angle * i) * abs(radius);
		// use the new x and y positionto draw the lines
		line(0, 0, posX, posY);
	}
}

function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

}
