/** Using the triangles, added a new row of triangles 
    and blend them together */

'use strict';

// added new variables
let segments = 10;
let radius;
let radius1;

function setup() {
    createCanvas(1240, 1748);
    colorMode(HSB, 360, 100, 100, 10);
    noStroke();
}

function draw() {
    // added the color mode and background in draw
    background(95);
    radius = width/2;
    radius1 = width/4;

    // add the angle
    var angleStep = 360 / segments;

    // create the shapes
    beginShape(TRIANGLE_FAN);
    vertex(width / 2, height -100);
    for (var angle = 0; angle <= 180; angle += angleStep) {
        var vx = width / 2 + cos(radians(-angle)) * radius;
        var vy = height / 2 + sin(radians(-angle)) * radius;
        vertex(vx, vy);
        fill(angle, 100, 100, 5);
    }
    endShape();

    // create the shapes
    beginShape(TRIANGLE_FAN);
    vertex(width / 2, height -100);
    for (var i = 0; i <= 180; i += angleStep) {
        var vx = width / 2 + cos(radians(-i)) * radius1;
        var vy = height / 2 + sin(radians(-i)) * radius1;
        vertex(vx, vy);
        fill(i, 100, 100, 5);
    }
    endShape();
}

function keyPressed() {
    console.log(segments);
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp() + '_seg_' + segments + '_rad_' + radius + '_rad1_' + radius1 + 'png');
}
