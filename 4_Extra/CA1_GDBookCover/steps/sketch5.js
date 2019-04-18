/** Add triangles instead of lines and the design looks like a fan.*/

'use strict';

// added new variables
let segments = 10;
let radius = 200;

function setup() {
    // createCanvas(1240, 1748);
    createCanvas(400, 400);
    colorMode(HSB, 360, 100, 100);
    noStroke();
}

function draw() {
    // added the color mode and background in draw
    background(95);

    // add the angle
    var angleStep = 360 / segments;

    // create the shapes
    beginShape(TRIANGLE_FAN);
    vertex(width / 2, height -100);
    for (var angle = 0; angle <= 180; angle += angleStep) {
        var vx = width / 2 + cos(radians(-angle)) * radius;
        var vy = height / 2 + sin(radians(-angle)) * radius;
        vertex(vx, vy);
        fill(angle, 100, 100);
    }
    endShape();


}

function keyPressed() {
    console.log(segments);
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp() + '_seg_' + segments + 'png');
}
