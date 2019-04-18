/** Add more than one line at a time in different directions in succession. */

'use strict';

let len = 0;
let chapterLen = 0;
let subChapterLen = 0;
let angle = 0;
let c, c1;
let dist = 0.1;
let pages = 23;

function setup() {
    createCanvas(1240, 1748);
    colorMode(HSB, 360, 100, 100);
    background(255);
    strokeWeight(1);

    c = color(231, 100, 100, 0.4);
    c1 = color(12, 100, 100, 0.4);
}

function draw() {

    translate(width / 2, height / 2);

    if(mouseIsPressed && mouseButton == LEFT) {
        for (let i = 0; i < pages; i++) {
            push();
                rotate(radians(angle));
                stroke(c);
                line(0, 0, chapterLen, 0);
            pop();
            angle += dist;
        }
    }
    // added extra lines to go in the opposite direction
    if(mouseIsPressed && mouseButton == RIGHT) {
        for (let i = 0; i < pages; i++) {
            push();
            // the lines are drawn in the opposite direction
                rotate(radians(-angle));
                stroke(c1);
                line(0, 0, subChapterLen, 0);
            pop();
            angle += dist;
        }
    }
}

function mousePressed() {
    // Add different lengths for the chapters and sub-chapters
    chapterLen = random(500, 1200);
    subChapterLen = random(100, 750);
}

function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp() + '.png');
}
