# 3. Change colour in circle using the mouse

## Step 1

```js
'use strict';

// Setting up the canvas
function setup() {
    createCanvas(500, 500);
}

function draw() {
    // Setting up the colour mode to HSB from the default RGB
    colorMode(HSB, 360, 100, 100);
    background(360, 0, 100);

    /** Create a triangle fan shape using vertices  
     * by starting in the middle of the canvas */
    beginShape(TRIANGLE_FAN);
    vertex(width / 2, height / 2);
    vertex(width / 2, 50);
    vertex(width - 200, 65);
    fill(300, 100, 100);
    endShape();
}
```

## Step 2

```js
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
```

## Step 3

```js
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
```

## Step 4

```js
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
```