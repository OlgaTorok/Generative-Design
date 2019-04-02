'use strict';

let noOfTiles = 10;
let tileWidth;
// Declare the angle
let angle = 0;

let img;
let actRandomSeed = 1000;
let minRadius = 1;
let maxRadius = 100;
let mySlider;

function preload(){
	img = loadImage('../img/star.svg');
}

function setup(){
	createCanvas(500, 500);
    imageMode(CENTER);
    angleMode(DEGREES); // Set the angle mode to degrees

    mySlider = createSlider(3, 50, 3);
	mySlider.position(10, 10);
    mySlider.style('width', '180px');
}

function draw(){
	background(0);
    randomSeed(actRandomSeed);
    
    noOfTiles = mySlider.value();
    tileWidth = width / noOfTiles;
    
	translate(tileWidth/2, tileWidth/2);

    for (let gridY = 0; gridY < noOfTiles; gridY++) {
  	  	for (let gridX = 0; gridX < noOfTiles; gridX++) {

	  		let posX = gridX * tileWidth;
            let posY = gridY * tileWidth;
            // Set the angle for shapes to follow the mouse
            angle = atan2((mouseY - posY),(mouseX -posX));
            
			push();
            translate(posX, posY);
            rotate(angle);  // Rotate the shapes
			image(img, 0, 0, tileWidth - 20, tileWidth - 20);
			pop();
  	  	}
  	}
}

// Save canvas
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), '_mouseX_' + mouseX + '_mouseY_' + mouseY +'.png');
}