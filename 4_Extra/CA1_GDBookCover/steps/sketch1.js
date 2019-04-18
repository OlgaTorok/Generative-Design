/** Draw the lines in a circle at random lengths */

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
        translate(width / 2, height / 2);
        rotate(radians(angle));
        stroke(c);
        line(0, 0, len, 0);
        angle += dist;
    }
}

function mousePressed() {
  // create a new random line length each new press
  len = random(70, 200);
}

/** The function saves the canvas as a png image if key S is pressed.
     If the keys 1, 2, 3, 4 or 5 is pressed the number of triangles changes. */
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp() + 'MouseX_' + mouseX + '_MouseY_' + mouseY + 'png');
}
