/** 
 * The extra work done on the sketch is commented
*/

'use strict';

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

// add colour for second hand
let secondStrokeColor;

// Variable changed to a better name
let numTicks = 60;


function setup() {
	createCanvas(500,500);
	noLoop();
	angleMode(DEGREES);

	minuteStrokeColor = color(30, 30, 30);
	minuteStrokeCap = SQUARE;

	hourStrokeColor = color(30, 30, 30);
	hourStrokeCap = SQUARE;

	// Make the colour of second hand red
	secondStrokeColor = color(185, 0, 0);
}

function draw() {
	background(255);

	//-- This code is not necessary for this example
	// push();
	// translate(width/2, height/2);
	// fill(255);
	// noStroke();
	// ellipse(0, 0, 450, 450);
	// pop();

	for(let i = 0; i < numTicks; i++){
		push();
		translate(width/2, height/2);
		rotate(map(i, 0, 60, 0, 360));

		if(i % 5 == 0){
			// add the  hour stroke variable
			strokeWeight(hourStrokeWeight);
			// add the stroke cap
			strokeCap(hourStrokeCap);
			// Change the line length
			line(0, clockRadius, 0, clockRadius - hourStrokeLength);
		} else {
			// add the minute stroke variable
			strokeWeight(minuteStrokeWeight);
			// add the stroke capd
			strokeCap(minuteStrokeCap);
			// Change the line length
			line(0, clockRadius, 0, clockRadius - minuteStrokeLength); 
		}
		pop();
	}
	

	hourHand();	// add the four hand function
}	// Added the closing tag to the draw function


function hourHand(){
	// Add push and pop
	push();
	translate(width/2, height/2);
	fill(hourStrokeColor);
	strokeCap(hourStrokeCap);

	beginShape();
	// Change the vertexes
	rotate(36);
	// -- To follow the clock measurements from the clock design the points below are correct 
	// -- but the clock looks differnet than the image so the other points are used
	// vertex(-hourHandStartWidth/2 , hourHandOffset);
	// vertex(hourHandStartWidth/2, hourHandOffset);
	// vertex(hourHandStartWidth/2 - hourHandsTaper, - hourHandLength);
	// vertex(-hourHandStartWidth/2 + hourHandsTaper, -hourHandLength);
	vertex(-hourHandStartWidth/2 , hourHandOffset/2);
	vertex(hourHandStartWidth/2, hourHandOffset/2);
	vertex(hourHandStartWidth/2 - hourHandsTaper/2, - hourHandLength);
	vertex(-hourHandStartWidth/2 + hourHandsTaper/2, - hourHandLength);
	endShape(CLOSE);
	pop();

	// Add the minute hand
	//---------------------
	push();
	translate(width/2, height/2);
	fill(minuteStrokeColor);
	strokeCap(minuteStrokeCap);

	beginShape();
	rotate(171);
	// change the vertexes
	vertex(-minuteHandStartWidth/2 , minuteHandOffset/2);
	vertex(minuteHandStartWidth/2, minuteHandOffset/2);
	vertex(minuteHandStartWidth/2 - minuteHandsTaper/2, - minuteHandLength);
	vertex(-minuteHandStartWidth/2 + minuteHandsTaper/2, - minuteHandLength);
	endShape(CLOSE);
	pop();


	// Add the second hand
	//---------------------
	push();
	translate(width/2, height/2);
	fill(secondStrokeColor);
	noStroke();

	beginShape();
	rotate(72);
	// change the vertexes
	vertex(-secondHandStartWidth/2 , secondHandOffset/2);
	vertex(secondHandStartWidth/2, secondHandOffset/2);
	vertex(secondHandStartWidth/2 - secondHandsTaper/2, - secondHandLength);
	vertex(-secondHandStartWidth/2 + secondHandsTaper/2, - secondHandLength);
	endShape(CLOSE);
	pop();

	// Add the oint of the seconds hand
	push();
	translate(width/2, height/2);
	rotate(73);
	strokeWeight(25);
	stroke(secondStrokeColor);
	point(-secondHandStartWidth/2 + secondHandsTaper/2, - secondHandLength);
	pop();

	// Add middle point
	push();
	translate(width/2, height/2);
	stroke(secondStrokeColor);
	strokeWeight(15);
	point(0, 0);
	pop();
}