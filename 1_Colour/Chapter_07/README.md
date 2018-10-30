# 7. Generates a specific color palette

## Step 1

```js
'use strict';

// Declare new variable for colour count
var colorCount = 20;

// Add random values to the colour arrays
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];


// Setting up the canvas
function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
}

function draw() {
    // Only loops once
    noLoop();

    // Create the colour palette using the arrays with random values
    for (var i = 0; i < colorCount; i++) {
        if (i % 2 == 0) {
            hueValues[i] = random(130, 220);
            saturationValues[i] = 100;
            brightnessValues[i] = random(15, 100);
        } else {
            hueValues[i] = 195;
            saturationValues[i] = random(20, 100);
            brightnessValues[i] = 100;
        }
    }

    // Add a tile counter
    var counter = 0;

    // Add a random row count and a row height
    var rowCount = int(random(5, 30));
    var rowHeight = height / rowCount;

    // Declare a variable that will create an index for the arrays
    var index = counter % colorCount;
    // Add the index to each array to create a HSB colour
    var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
    fill(col);
    rect(0, 0, rowCount, rowHeight);
    counter++;
}
```

## Step 2

```js
'use strict';

var colorCount = 20;

var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
}

function draw() {
    noLoop();

    for (var i = 0; i < colorCount; i++) {
        if (i % 2 == 0) {
            hueValues[i] = random(130, 220);
            saturationValues[i] = 100;
            brightnessValues[i] = random(15, 100);
        } else {
            hueValues[i] = 195;
            saturationValues[i] = random(20, 100);
            brightnessValues[i] = 100;
        }
    }

    var counter = 0;

    var rowCount = int(random(5, 30));
    var rowHeight = height / rowCount;

    // Separate the line in parts
    for (var i = rowCount; i >= 0; i--) {
        // Count the fragments 
        var partCount = i + 1;
        var parts = [];

        for (var ii = 0; ii < partCount; ii++) {
                // Push to the empty array
                parts.push(random(2, 20));
        }

        // Sum up all fragments
        var sumPartsTotal = 0;
        for (var ii = 0; ii < partCount; ii++) {
            //Add all the parts together to get the total
            sumPartsTotal += parts[ii];
        }

        // Draw the rectangles
        var sumPartsNow = 0;
        // Go through the loop and find out each part's location
        for (var j = 0; j < parts.length; j++) {
            // We map each value to the total width
            var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
            var y = rowHeight * i;
            var w = map(parts[j], 0, sumPartsTotal, 0, width);
            var h = rowHeight;

            var index = counter % colorCount;
            var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
            fill(col);
            // Use the set variable to draw the rectangles
            rect(x, y, w, h);
            // Add the total parts together
            sumPartsNow += parts[j];

            counter++;
        }
    }
}
```

## Step 3

```js
'use strict';

var colorCount = 20;

var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
// Declare a seed value
var actRandomSeed = 0;

function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
}

function draw() {
    noLoop();
    // Returns a constant parameter
    randomSeed(actRandomSeed);

    for (var i = 0; i < colorCount; i++) {
        if (i % 2 == 0) {
            hueValues[i] = random(130, 220);
            saturationValues[i] = 100;
            brightnessValues[i] = random(15, 100);
        } else {
            hueValues[i] = 195;
            saturationValues[i] = random(20, 100);
            brightnessValues[i] = 100;
        }
    }

    var counter = 0;

    var rowCount = int(random(5, 30));
    var rowHeight = height / rowCount;

    for (var i = rowCount; i >= 0; i--) {
        var partCount = i + 1;
        var parts = [];

        for (var ii = 0; ii < partCount; ii++) {
                parts.push(random(2, 20));
        }

        var sumPartsTotal = 0;
        for (var ii = 0; ii < partCount; ii++) {
            sumPartsTotal += parts[ii];
        }

        var sumPartsNow = 0;
        for (var j = 0; j < parts.length; j++) {
            var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
            var y = rowHeight * i;
            var w = map(parts[j], 0, sumPartsTotal, 0, width);
            var h = rowHeight;

            var index = counter % colorCount;
            var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
            fill(col);
            rect(x, y, w, h);
            sumPartsNow += parts[j];

            counter++;
        }
    }
}

// Using the mouse create random patterns
function mouseReleased() {
    actRandomSeed = random(100000);
    loop();
}
```

## Step 4

```js
'use strict';

var colorCount = 20;

var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
var actRandomSeed = 0;

function setup() {
    createCanvas(500, 500);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
}

function draw() {
    noLoop();
    randomSeed(actRandomSeed);

    for (var i = 0; i < colorCount; i++) {
        if (i % 2 == 0) {
            hueValues[i] = random(130, 220);
            saturationValues[i] = 100;
            brightnessValues[i] = random(15, 100);
        } else {
            hueValues[i] = 195;
            saturationValues[i] = random(20, 100);
            brightnessValues[i] = 100;
        }
    }

    var counter = 0;

    var rowCount = int(random(5, 30));
    var rowHeight = height / rowCount;

    for (var i = rowCount; i >= 0; i--) {
        var partCount = i + 1;
        var parts = [];

        for (var ii = 0; ii < partCount; ii++) {
                parts.push(random(2, 20));
        }

        var sumPartsTotal = 0;
        for (var ii = 0; ii < partCount; ii++) {
            sumPartsTotal += parts[ii];
        }

        var sumPartsNow = 0;
        for (var j = 0; j < parts.length; j++) {
            var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
            var y = rowHeight * i;
            var w = map(parts[j], 0, sumPartsTotal, 0, width);
            var h = rowHeight;

            var index = counter % colorCount;
            var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
            fill(col);
            rect(x, y, w, h);
            sumPartsNow += parts[j];

            counter++;
        }
    }
}

function mouseReleased() {
    actRandomSeed = random(100000);
    loop();
}

// Create a keyPressed funtion to save the canvas as a .png or .ase file
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
    if (key == 'c' || key == 'C') {
        // Save the canvas as ase file
        var colors = [];
        for (var i = 0; i < hueValues.length; i++) {
            colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
        }
        writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
    }
}
```
