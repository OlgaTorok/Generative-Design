'use strict';

let stk = 3;

function setup(){
	createCanvas(500, 500);
}

function draw(){
	background(0);
	strokeWeight(stk);
	stroke(255);
	/* Translate grid to the middle of the canvas
		and draw a line*/
	translate(width/2, height/2);
	line(-100, 0, 100, 0);

}

// Save the canvas
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

}
