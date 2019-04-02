'use strict';

let noOfTiles = 10;
let tileWidth;

function setup(){
    createCanvas(500, 500);
    tileWidth = width / noOfTiles; // The width of the tiles
}

function draw(){
    background(123);
    // Translate grid to half tile width
    translate(tileWidth/2, tileWidth/2);
    
	// Create a grid that will contain a list of shapes
    for (let gridY = 0; gridY < noOfTiles; gridY++) {
        for (let gridX = 0; gridX < noOfTiles; gridX++) {
            // Set the x and y position for the shape
            let posX = gridX * tileWidth;
            let posY = gridY * tileWidth;
            // Draw the shape
            ellipse(posX, posY, 10, 10);
        }
    }
}