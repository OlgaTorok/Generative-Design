[Shapes](../)

# 2. Drawing changing shapes using the mouse

## Step 1

```js
'use strict';

function setup(){
    createCanvas(500, 500);
    background(0);
    strokeWeight(1);
    noFill();
}

function draw(){
    // Translate the shape to the middle of the canvas
    translate(width/2, height/2);
    stroke(255, 25);

    // Creating a shape using the beginShape and endShape functions
    beginShape();
    vertex(30, 20);
    vertex(85, 20);
    vertex(85, 75);
    vertex(30, 75);
    endShape(CLOSE);
}
```

## Step 2

```js
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
```

## Step 3

```js
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
```

![](../images/shapes_02a.PNG?raw=true "")
![](../images/shapes_02b.PNG?raw=true "")
