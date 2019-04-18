/** Using lines to show the chapters using a function for shape */

'use strict';

let len;
let angle = 0;
var chapters = [20, 164, 312, 458, 476];
var sub_chapters = [180, 200, 256, 286, 318, 320, 346, 368, 390, 410, 432, 458, 474];
let colour;

function setup() {
    createCanvas(1240, 1748);
    background(200);
    // colorMode(HSB, 360, 100, 100);
}

function draw() {
    translate(width/2, height/2);

    for(var i = 0; i < chapters.length; i++) {
        colour = 123;
        rotate(radians(angle) + chapters[i]);
        len = chapters[i];
        shape();
    }
}

function shape() {
    beginShape();
    rotate(radians(angle));
    stroke(colour);
    strokeWeight(5);
    line(0, 0, len, 0);
    endShape();
}



function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp() + '_angle_' + angle + 'png');
}
