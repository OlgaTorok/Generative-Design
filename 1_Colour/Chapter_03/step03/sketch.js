'use strict';

var segmentCount = 360;
var radius = 200;

function setup() {
    createCanvas(500, 500);
    noStroke();
}

function draw() {
    /** Change the saturation and brightness 
        with the width and height of the canvas */
    colorMode(HSB, 360, width, height);
    // The background brightness changes with the height
    background(360, 0, height);

    var angle = 0;
    var increment = 360 / segmentCount;

    beginShape(TRIANGLE_FAN);
    vertex(width / 2, height / 2);

    for (var angle = 0; angle <= 360; angle += increment) {
        var vx = radius * cos(radians(angle)) + width / 2;
        var vy = radius * sin(radians(angle)) + height / 2;
        vertex(vx, vy);
        /**  The fill of the shape changes depending 
             on the angle and the mouse position */
        fill(angle, mouseX, mouseY);
    }
    endShape();
}