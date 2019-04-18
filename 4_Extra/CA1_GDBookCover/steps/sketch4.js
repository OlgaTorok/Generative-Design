/** Add lines for when the right mouse button is pressed
    and added a different colour for them and they
    rotate in the opposite direction. */

'use strict';

let len = 0;
let chapterLen = 0;
let subChapterLen = 0;
let angle = 0;
let c, c1;
let dist = 0.3;

function setup() {
    // createCanvas(1240, 1748);
    createCanvas(400, 400);
    colorMode(HSB, 360, 100, 100);
    background(255);
    strokeWeight(1);

    c = color(231, 100, 100, 0.4);
    c1 = color(12, 100, 100, 0.4);
}

function draw() {

    translate(width / 2, height / 2);

    if(mouseIsPressed && mouseButton == LEFT) {
        push();
            rotate(radians(angle));
            stroke(c);
            line(0, 0, chapterLen, 0);
        pop();
        angle += dist;
    }
    // added extra lines to go in the opposite direction
    if(mouseIsPressed && mouseButton == RIGHT) {
        push();
        // the lines are drawn in the opposite direction
            rotate(radians(-angle));
            stroke(c1);
            line(0, 0, subChapterLen, 0);
        pop();
        angle += dist;
    }
}

function mousePressed() {
    // Add different lengths for the chapters and sub-chapters
    chapterLen = random(120, 200);
    subChapterLen = random(30, 130);
}

function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp() + '.png');
}
