'use strict';

var segmentCount = 360;
var radius = 200;

function setup() {
    createCanvas(500, 500);
    noStroke();
}

function draw() {
    colorMode(HSB, 360, width, height);
    background(360, 0, height);

    var angle = 0;
    var increment = 360 / segmentCount;

    beginShape(TRIANGLE_FAN);
    vertex(width / 2, height / 2);

    for (var angle = 0; angle <= 360; angle += increment) {
        var vx = radius * cos(radians(angle)) + width / 2;
        var vy = radius * sin(radians(angle)) + height / 2;
        vertex(vx, vy);
        fill(angle, mouseX, mouseY);
    }
    endShape();
}

/** The function saves the canvas as a png image if key S is pressed. 
     If the keys 1, 2, 3, 4 or 5 is pressed the number of triangles changes. */
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

    switch (key) {
        case '1':
            segmentCount = 360;
            break;
        case '2':
            segmentCount = 45;
            break;
        case '3':
            segmentCount = 24;
            break;
        case '4':
            segmentCount = 12;
            break;
        case '5':
            segmentCount = 6;
            break;
    }
}