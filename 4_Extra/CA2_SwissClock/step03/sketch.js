'use strict';

// Declared variables for the minutes ticks
let minuteStrokeLength = 10;
let minuteStrokeWeight = 4;
let minuteStrokeColor;
let minuteStrokeCap;

// Declared variables for the hours ticks
let hourStrokeLength = 30;
let hourStrokeWeight = 10;
let hourStrokeColor;
let hourStrokeCap;

let clockRadius = 200;

// Declared variables for the hour hand
let hourHandsTaper = 6;
let hourHandLength = 195;
let hourHandOffset = 80;
let hourHandStartWidth = 20;

// Declared variables for the minutes hand
let minuteHandsTaper = 6;
let minuteHandLength = 155;
let minuteHandOffset = 80;
let minuteHandStartWidth = 20;

// Declared variables for the second hand
let secondHandsTaper = 2;
let secondHandLength = 155;
let secondHandOffset = 80;
let secondHandStartWidth = 10;

// Add colour for second hand
let secondStrokeColor;

// Number of ticks in the clock
let numTicks = 60;


function setup() {
	createCanvas(500,500);
	noLoop();
	angleMode(DEGREES);
    // Set the colour for minutes hand
	minuteStrokeColor = color(30, 30, 30);
	minuteStrokeCap = SQUARE;
    // Set the colour for hours hand
	hourStrokeColor = color(30, 30, 30);
	hourStrokeCap = SQUARE;

	// Set the colour for seconds hand
	secondStrokeColor = color(185, 0, 0);
}

function draw() {
	background(255);

	for(let i = 0; i < numTicks; i++){
		push();
        translate(width/2, height/2);
        // Map the ticks to the circle
		rotate(map(i, 0, 60, 0, 360));

		if(i % 5 == 0){
			// Add the  hour stroke and cap variables
			strokeWeight(hourStrokeWeight);
			strokeCap(hourStrokeCap);
			// Draw the hours ticks on the clock
			line(0, clockRadius, 0, clockRadius - hourStrokeLength);
		} else {
			// Add the minute stroke and cap variables
			strokeWeight(minuteStrokeWeight);
			strokeCap(minuteStrokeCap);
			// Draw the minutes ticks on the clock
			line(0, clockRadius, 0, clockRadius - minuteStrokeLength); 
		}
		pop();
    }
    // Call the function that contains the clock hands
	hourHand();
}

function hourHand(){
    // Use push and pop to create the shapes for the hands

    // Add the hour hand
    //---------------------
	push();
	translate(width/2, height/2);
	fill(hourStrokeColor);
	strokeCap(hourStrokeCap);

	beginShape();
	rotate(36);
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
	vertex(-secondHandStartWidth/2 , secondHandOffset/2);
	vertex(secondHandStartWidth/2, secondHandOffset/2);
	vertex(secondHandStartWidth/2 - secondHandsTaper/2, - secondHandLength);
	vertex(-secondHandStartWidth/2 + secondHandsTaper/2, - secondHandLength);
	endShape(CLOSE);
	pop();

	// Add the point of the seconds hand
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