/** Using lines to show the chapters using a function for shape */

'use strict';

let len;
let angle = 0;
// segments are nr of chapters
let segments = 10;
var chapters = [20, 164, 312, 458, 476];
var sub_chapters = [180, 200, 256, 286, 318, 320, 346, 368, 390, 410, 432, 458, 474];
let colour;

function setup() {
    createCanvas(1240, 1748);
    background(200);
    // colorMode(HSB, 360, 100, 100);
}

function draw() {
    noLoop();
    noStroke()
    fill(173, 100, 100);
    textSize(100);
    text("Sketch8a", width - 500, height - 100);

    translate(width/2, height/2);


    for(var i = 0; i < chapters.length; i++) {
        // chapters
        colour = 123;
        rotate(radians(angle + chapters[i]));
        len = chapters[i];
        shape();
        // sub chapters
        for(var j = 0; j < sub_chapters.length; j++) {
            colour = 255;
            rotate(radians(angle + sub_chapters[j]));
            len = sub_chapters[j];
            shape();
        }
    }
}

function shape() {
    // Map the chapters length
    // for(var c = 0; c < chapters.length; c++) {
    //     // len = map(chapters[c], 0, max(chapters[c]), 0, 580);
    //     len = map(chapters[c], 0, max(chapters[c]), 0, 580);
    // }

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
