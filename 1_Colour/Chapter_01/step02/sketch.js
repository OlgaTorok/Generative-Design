'use strict';

function setup() {
    createCanvas(400, 400);
    noStroke();
    colorMode(HSB, 360, 100, 100);
    rectMode(CENTER);
}

function draw() {
    /* Background contains the mouseY to change the colour 
    depending on the mouse position */
    background(mouseY / 2, 100, 100);
    /* MouseY was added to the fill to change the colour
    depending on the position of the mouse*/
    fill(360 - mouseY / 2, 100, 100);
    /* MouseX was added to the width and height of the rectangle
    so the size will change depending on the mouse position*/
    rect(width / 2, height / 2, mouseX + 1, mouseX + 1);
}