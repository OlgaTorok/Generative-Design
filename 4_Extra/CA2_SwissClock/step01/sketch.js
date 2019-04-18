'use strict';

// Two red Circles on the second hand are 15px and 25px in width respectively
let minuteStrokeLength = 10;
let minuteStrokeWeight = 4;
let minuteStrokeColor;
let minuteStrokeCap;

let hourStrokeLength = 30;
let hourStrokeWeight = 10;
let hourStrokeColor;
let hourStrokeCap;

let clockRadius = 200;

let hourHandsTaper = 6;
let hourHandLength = 195;
let hourHandOffset = 80;
let hourHandStartWidth = 20;

let minuteHandsTaper = 6;
let minuteHandLength = 155;
let minuteHandOffset = 80;
let minuteHandStartWidth = 20;

let secondHandsTaper = 2;
let secondHandLength = 155;
let secondHandOffset = 80;
let secondHandStartWidth = 10;

// new variable
let noTicks = 60;


function setup(){
		createCanvas(500,500);
		noLoop();
		angleMode(DEGREES);

		minuteStrokeColor = color(30, 30, 30);
		minuteStrokeCap = SQUARE;

		hourStrokeColor = color(30, 30, 30);
		hourStrokeCap = SQUARE;
}

function draw(){
	background(255);

	push();
	translate(width/2, height/2);
	fill(255);
	noStroke();
	ellipse(0, 0, 450, 450);
	pop();

	for(let i = 0; i < noTicks; i++){
		push();
		translate(width/2, height/2);
		rotate(map(i, 0, 60, 0, 360));

		if(i % 5 == 0){
			strokeWeight(15);
			line(0, clockRadius - 40, 0, clockRadius - 10);
		} else {
			strokeWeight(4);
			line(0, clockRadius - 20, 0, clockRadius - 10);
		}
		pop();
	}

	function hourHand(){
		beginShape();
		translate(width/2, height/2);
		fill(hourStrokeColor);
		strokeCap(hourStrokeCap);
		vertex(-hourHandOffset, hourHandOffset);
		vertex(-hourHandOffset + hourHandStartWidth, hourHandOffset);
		vertex(-hourHandOffset + hourHandLength - hourHandStartWidth - taper, );

		endShape(CLOSE);
}

hourHand();
