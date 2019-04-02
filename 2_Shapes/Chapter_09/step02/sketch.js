'use strict';

let noOfTiles = 10;
let tileWidth;
let circleRadiusBig = 40;
let circleRadiusSmall = 20;

function setup(){
	createCanvas(500, 500);
	tileWidth = width / noOfTiles;
}

function draw(){
    background(123);
    noStroke();

	translate(tileWidth/2, tileWidth/2);

    for (let gridY = 0; gridY < noOfTiles; gridY++) {
  	  	for (let gridX = 0; gridX < noOfTiles; gridX++) {

	  		let posX = gridX * tileWidth;
            let posY = gridY * tileWidth;
            
            fill(0);
			ellipse(posX, posY, circleRadiusBig, circleRadiusBig);
  	  	}
    }

	// Create a grid for the white circles and draw them on top of the big ones
    for (let gridY = 0; gridY < noOfTiles; gridY++) {
        for (let gridX = 0; gridX < noOfTiles; gridX++) {
            // Set the x and y position for the white circles
            let posX = gridX * tileWidth;
            let posY = gridY * tileWidth;

            fill(255);
            ellipse(posX, posY, circleRadiusSmall, circleRadiusSmall);
        }
    }
}