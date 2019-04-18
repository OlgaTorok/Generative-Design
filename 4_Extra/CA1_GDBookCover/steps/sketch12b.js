/** Using lines to show the chapters using a function for shape and points */

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
    translate(width/2, height/2);

    for(var i = 0; i < chapters.length; i++) {
        colour = 123;
        rotate(radians(angle) + chapters[i]);
        len = chapters[i];
        shape();
        dots();

        for(var j = 0; j < sub_chapters.length; j++) {
            colour = 255;
            rotate(radians(angle) + sub_chapters[j]);
            len = sub_chapters[j];
            shape();
            dots();
        }
    }
}

function shape() {
    beginShape();
    rotate(radians(angle));
    stroke(colour);
    strokeWeight(2);
    line(0, 0, len, 0);
    endShape();
}

function dots() {
    stroke(colour);
    strokeWeight(15);

    if(chapters) {
        point(len, 5-chapters.length);
    } else if(sub_chapters){
        point(len, 5-sub_chapters.length);
    }
}



function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp() + 'png');
}
