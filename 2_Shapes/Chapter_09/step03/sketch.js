'use strict';

let noOfTiles = 10;
let tileWidth;
let shapeAngle = 0;
let strokeColor;
// Declare random seed
let actRandomSeed = 0;

function setup(){
    createCanvas(500, 500);
    angleMode(DEGREES);
    strokeColor = color(255, 123);
    tileWidth = width / noOfTiles;
}

function draw(){
    background(123);
    randomSeed(actRandomSeed);  // Random seed used instead of noLoop()

    translate(tileWidth/2, tileWidth/2);
    
    for (let gridY = 0; gridY < noOfTiles; gridY++) {
        for (let gridX = 0; gridX < noOfTiles; gridX++) {
            
            let posX = gridX * tileWidth;
            let posY = gridY * tileWidth;

            // Set the shift variables for the shapes
            let shiftX = random(-mouseX, mouseX) / 20;
            let shiftY = random(-mouseX, mouseX) / 20;

            let circleRadius = map(constrain(mouseY, 0, width, 0, 100), 0, width, 1, 60);
		    let circleStroke = map(constrain(mouseY, 0, height, 1, 5), 0, height, 1, 10);

            noFill(); 
            stroke(strokeColor); 
            strokeWeight(circleStroke);
            // Add the shift to the x and y position
            ellipse(posX + shiftX, posY + shiftY, circleRadius, circleRadius);
        }
    }
}

// Change the position of shapes if mouse is pressed
function mousePressed() {
    actRandomSeed = random(100000);
}

// Save the canvas
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), '_mouseX_' + mouseX + '_mouseY_' + mouseY +'.png');
}