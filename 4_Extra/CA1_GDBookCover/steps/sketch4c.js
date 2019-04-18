/** Add more than one line at a time in the same directions at the same time. */

'use strict';

let len = 0;
let chapterLen = 0;
let subChapterLen = 0;
let angle = 0;
let c, c1;
let dist = 0.1;
// let pages = [23, 16, 65, 34, 26];
let pages = [1, 2, 3, 4, 5];

function setup() {
    createCanvas(1240, 1748);
    colorMode(HSB, 360, 100, 100);
    background(255);
    strokeWeight(1);
    stroke(123);

    c = color(231, 100, 100, 0.4);
    c1 = color(12, 100, 100, 0.4);
}


function draw() {

    translate(width / 2, height / 2);

    for(var i in pages){

        if(mouseIsPressed) {
            for (let i = 0; i < pages.length; i++) {
                push();
                    rotate(radians(angle));
                    stroke(c);
                    line(0, 0, chapterLen, 0);
                pop();
                angle += dist;
            }
            for (let i = 0; i < pages.length; i++) {
                push();
                // the lines are drawn in the opposite direction
                    rotate(radians(angle));
                    stroke(c1);
                    line(0, 0, subChapterLen, 0);
                pop();
                angle += dist;
                // console.log(pages[i]);
            }
        }
    }
}

function mousePressed() {
    // Add different lengths for the chapters and sub-chapters
    chapterLen = random(500, 1000);
    subChapterLen = random(100, 750);
}

function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp() + '_angle_' + angle + 'png');
}
