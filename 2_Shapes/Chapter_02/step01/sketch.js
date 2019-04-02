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
