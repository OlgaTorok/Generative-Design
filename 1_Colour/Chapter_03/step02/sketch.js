'use strict';

// Declare variables for the triangle segments
var segmentCount = 360;
var radius = 200;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    colorMode(HSB, 360, 100, 100);
    background(360, 0, 100);

    // New variables declared for each triangle
    var angle = 0;
    var increment = 360 / segmentCount;
    
    beginShape(TRIANGLE_FAN);
        vertex(width / 2, height / 2);

        /** A for() loop is created to add a new vertex 
             until the circle is completed */
        for(var angle = 0; angle <= 360; angle += increment) {
            // Declare x and y coordinates of the new vertex 
            var vx = radius * cos(radians(angle)) + width / 2;
            var vy = radius * sin(radians(angle)) + height / 2;
            vertex(vx, vy);
            fill(300, 100, 100);
        }
    endShape();
}