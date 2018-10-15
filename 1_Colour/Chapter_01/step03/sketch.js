'use strict';

function setup() {
    createCanvas(400, 400);
    noStroke();
    colorMode(HSB, 360, 100, 100);
    rectMode(CENTER);
}

function draw() {
    background(mouseY / 2, 100, 100);
    fill(360 - mouseY / 2, 100, 100);
    rect(width / 2, height / 2, mouseX + 1, mouseX + 1);
}

/* This function will save a png image of the canvas 
on your computer, when the S key is pressed */
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}