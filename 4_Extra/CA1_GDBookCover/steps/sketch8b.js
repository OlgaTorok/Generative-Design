/** Using lines to show the chapters using a function for shape */

'use strict';

var len;
var angle = 0;
var chapters = [20, 164, 312, 458, 476];
var sub_chapters = [180, 200, 256, 286, 318, 320, 346, 368, 390, 410, 432, 458, 474];
var colour;

function setup() {
    createCanvas(1240, 1748);
    background(200);
    // colorMode(HSB, 360, 100, 100);
}

function draw() {
    noLoop();
    noStroke()
    fill(234, 100, 100);
    textSize(150);
    text("GENERATIVE", 100, 200)
    text("DESIGN", 506, 310)

    fill(343, 73, 56);
    textSize(100);
    text("Sketch8b", width - 500, height - 100);

    translate(width/2, height/2);

    for(var i = 0; i < chapters.length; i++) {
        // chapters
        colour = color(343, 73, 56);
        rotate(radians(angle + chapters[i]));
        len = chapters[i];
        shape();
        // sub chapters
        for(var j = 0; j < sub_chapters.length; j++) {
            colour = color(15, 73, 95);
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
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp() + '_angle_' + angle + 'png');
}
