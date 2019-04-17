'use strict';

let noOfTiles = 10;
let tileWidth;
let img;
let actRandomSeed = 1000;
// Declare the radius
let minRadius = 1;
let maxRadius = 100;
// Declare the slider
let mySlider;

function preload(){
	img = loadImage('../img/star.svg');
}

function setup(){
	createCanvas(500, 500);
    imageMode(CENTER);
    // Add the slider to canvas
    mySlider = createSlider(3, 50, 3);
	mySlider.position(10, 10);
    mySlider.style('width', '180px');
}

function draw(){
	background(0);
    randomSeed(actRandomSeed);
    
    // Set the number of tiles to the slider value
    noOfTiles = mySlider.value();
    tileWidth = width / noOfTiles; // the width of the tiles
    
	translate(tileWidth/2, tileWidth/2);

    for (let gridY = 0; gridY < noOfTiles; gridY++) {
  	  	for (let gridX = 0; gridX < noOfTiles; gridX++) {
	  		let posX = gridX * tileWidth;
            let posY = gridY * tileWidth;
            
			push();
			translate(posX, posY);
			image(img, 0, 0, tileWidth - 20, tileWidth - 20);
			pop();
  	  	}
  	}
}