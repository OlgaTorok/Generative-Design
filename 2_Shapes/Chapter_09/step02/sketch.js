'use strict';

let noOfTiles = 10;
let tileWidth;
// Declare the angle and stroke colour
let shapeAngle = 0;
let strokeColor;

function setup(){
    createCanvas(500, 500);
    angleMode(DEGREES); // Set the angle mode to degrees
    strokeColor = color(255, 123);  // Set the stroke colour
    tileWidth = width / noOfTiles;
}

function draw(){
    background(123);
    translate(tileWidth/2, tileWidth/2);
    
    for (let gridY = 0; gridY < noOfTiles; gridY++) {
        for (let gridX = 0; gridX < noOfTiles; gridX++) {
            
            let posX = gridX * tileWidth;
            let posY = gridY * tileWidth;

            // Set the circular radius of the shape for mouse y
            let circleRadius = map(constrain(mouseY, 0, width, 0, 100), 0, width, 1, 60);
		    let circleStroke = map(constrain(mouseY, 0, height, 1, 5), 0, height, 1, 10);

            noFill();   // No fill set
            // Set stroke weight and colour
            stroke(strokeColor); 
            strokeWeight(circleStroke);
            // Use new circle radius
            ellipse(posX, posY, circleRadius, circleRadius);
        }
    }
}