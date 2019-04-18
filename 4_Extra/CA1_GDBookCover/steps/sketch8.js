/** Using lines to show the chapters using a function for shape */

'use strict';

let len;
let angle = 50;
// let segments = 10;
var segments = [45, 67, 12, 34, 98, 37];
let colour;

function setup() {
    createCanvas(1240, 1748);
    background(200);
    // colorMode(HSB, 360, 100, 100);
}

function draw() {
    translate(width/2, height/2);

    for(var i = 0; i < segments.length; i++) {
        colour = 123;
        len = 500;
        shape();

        for(var j = 0; j < segments[i]; j++) {
            colour = 255;
            len = 300;
            shape();
        }
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
    console.log(segments);
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp() + '_seg_' + segments + '_angle_' + angle + 'png');
}
