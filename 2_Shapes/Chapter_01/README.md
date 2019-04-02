[Shapes](../)

# 1. Drawing a filled circle with lines

## Step 1

```js
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
```

## Step 2

```js
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
```

## Step 3

```js
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
```

![](../images/shapes_01c.PNG?raw=true "")
![](../images/shapes_01b.PNG?raw=true "")
![](../images/shapes_01a.PNG?raw=true "")
