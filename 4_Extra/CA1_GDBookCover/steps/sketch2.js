/**
  Loop more than one line at the time using the for() loop.
  When the angle is outside the loop it gives a feather like effect.
*/

'use strict';

let len = 0;
let angle = 0;
let c;
let dist = 0.3;

function setup() {
    // createCanvas(1240, 1748);
    createCanvas(400, 400);
    colorMode(HSB, 360, 100, 100);
    background(255);
    strokeWeight(1);

    c = color(231, 100, 100, 0.4);
}

function draw() {
    if(mouseIsPressed && mouseButton == LEFT) {

        // added a for loop to draw 100 lines
        for (let i = 0; i < 50; i++) {
            translate(width / 2, height / 2);
            rotate(radians(angle));
            stroke(c);
            line(0, 0, len, 0);
        }
        angle += dist;
    }
}

function mousePressed() {
  len = random(70, 200);
}

function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp() + '_Length_' + len + '.png');
}
