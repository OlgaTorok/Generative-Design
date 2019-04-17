[Type](../)

# 3. Draw and manipulate text using sliders

In this exercise text is drawn and manipulated using input box, checkbox and sliders.  The sketch also uses a gradient image for stroke and fill colour.

## Step 1

```js
'use strict';

// Declare variables for text
let font;
let textImg;
let textTyped = 'ABC';
let fontSize = 100;

// Preload the font
function preload(){
    font = loadFont('../data/freeSansBold.ttf');
}

function setup(){
    noStroke();

    // Create and call canvas from the DOM
    let canvas = createCanvas(730, 500);
    canvas.parent('#canvasHolder');

    // Call the text graphic function
    setUptext();
    // Add the graphic created to the screen
    image(textImg, 0, 0);
}

function draw(){
}

// Create image using graphics
function setUptext(){
    textImg = createGraphics(width, height);
    textImg.pixelDensity(1);
    textImg.background(255);
    textImg.textAlign(CENTER, CENTER);
    // Use the preloaded font
    textImg.textFont(font);
    textImg.textSize(fontSize);
    textImg.text(textTyped, width/2, height/2 - 100);
    textImg.loadPixels();
}
```

## Step 2

```js
'use strict';

let font;
let textImg;
let fontSize = 150;

let textTyped = 'ABC';
// Add a variable for typed text
let inputTxt;

// Declare a radius for the ellipse
let circleRadius = 10;


function preload(){
    font = loadFont('../data/freeSansBold.ttf');
}

function setup(){
    noStroke();

    let canvas = createCanvas(730, 500);
    canvas.parent('#canvasHolder');

    // Create input text box 
    inputTxt = createInput('');
    inputTxt.class('inputTxt');
    inputTxt.changed(update);
    inputTxt.parent('#textController');

    setUpText();
}

function draw() {
    background(255);

    // Create a grid in x and y direction
    for(let y = 0; y < height; y += circleRadius) {
        for(let x = 0; x < width; x += circleRadius) {

            // Call each pixel in the image by using the index value
            let index = (x + y * textImg.width) * 4;

            // Create the rgb value using the index
            let r = textImg.pixels[index];

            // Draw the ellipse at the x and y position where red value is less than 128
            if(r < 128) {
                noFill();
                stroke(0); 
                ellipse(x, y, circleRadius, circleRadius);
            }
        }
    }
}

// Create an update function to update the DOM fields
function update() {

    // If there is an input get the value and draw it on canvas
    if(inputTxt) {
        textTyped = inputTxt.value();
        setUpText();
    }
}

function setUpText(){
    textImg = createGraphics(width, height);
    textImg.pixelDensity(1);
    textImg.background(255);
    textImg.textAlign(CENTER, CENTER);
    textImg.textFont(font);
    textImg.textSize(fontSize);
    textImg.text(textTyped, width/2, height/2 - 100);
    textImg.loadPixels();
}
```

## Step 3

```js
'use strict';

let font;
let textImg;
let fontSize = 150;

let textTyped = 'ABC';
let inputTxt;

let circleRadius = 10;
// Declare variables for the fill checkbox
let checkBox;
let filled = 1;

function preload(){
    font = loadFont('../data/freeSansBold.ttf');
}

function setup(){
    noStroke();

    let canvas = createCanvas(730, 500);
    canvas.parent('#canvasHolder');

     // Create checkbox
     checkBox = createCheckbox('Fill', true);
     checkBox.parent('#fillController');
     checkBox.changed(update);

    inputTxt = createInput('ABC');
    inputTxt.class('inputTxt');
    inputTxt.changed(update);
    inputTxt.parent('#textController');

    setUpText();
}

function draw() {
    background(255);

    for(let y = 0; y < height; y += circleRadius) {
        for(let x = 0; x < width; x += circleRadius) {

            let index = (x + y * textImg.width) * 4;

            let r = textImg.pixels[index];

            if(r < 128) {

               // If the variable filled is true
               if (filled) {
                    // Then draw the ellipse with a fill
                    fill(0);
                    noStroke();
                    ellipse(x, y, circleRadius, circleRadius);
                } else {
                    // Else draw the ellipse with just a stroke
                    noFill();
                    stroke(0);
                    ellipse(x, y, circleRadius, circleRadius);
                }
            }
        }
    }
}

function update() {

    if(inputTxt) {
        textTyped = inputTxt.value();
        setUpText();
    }

     // If the checkbox is checked, fill the ellipse
     if(checkBox.checked() == 1) {
        filled = 1;
    } else {
        filled = 0;
    }
}

function setUpText(){
    textImg = createGraphics(width, height);
    textImg.pixelDensity(1);
    textImg.background(255);
    textImg.textAlign(CENTER, CENTER);
    textImg.textFont(font);
    textImg.textSize(fontSize);
    textImg.text(textTyped, width/2, height/2 - 100);
    textImg.loadPixels();
}
```

## Step 4

```js
'use strict';

let font;
let textImg;
// Declare point density for text
let pointDensity = 10;

let textTyped = 'ABC';
let inputTxt;

let checkBox;
let filled = 1;

// Add the slider for circle radius
let radiusSlider;
let circleRadius = 5;

// Add the slider for font size
let sizeSlider;
let fontSize = 150;


function preload(){
    font = loadFont('../data/freeSansBold.ttf');
}

function setup(){
    noStroke();

    let canvas = createCanvas(730, 500);
    canvas.parent('#canvasHolder');

    inputTxt = createInput('ABC');
    inputTxt.class('inputTxt');
    inputTxt.changed(update);
    inputTxt.parent('#textController');

    checkBox = createCheckbox('Fill', true);
    checkBox.parent('#fillController');
    checkBox.changed(update);

    // Create sliders 
    radiusSlider = createSlider(5, 20, circleRadius);
    radiusSlider.parent('#radiusController');
    radiusSlider.mouseReleased(update);

    sizeSlider = createSlider(50, 700, fontSize);
    sizeSlider.parent('#sizeController');
    sizeSlider.mouseReleased(update);

    setUpText();
}

function draw() {
    background(255);

    for(let y = 0; y < height; y += pointDensity) {
        for(let x = 0; x < width; x += pointDensity) {

            let index = (x + y * textImg.width) * 4;
            let r = textImg.pixels[index];

            if(r < 128) {

                if (filled) {
                    fill(0);
                    noStroke();
                    ellipse(x, y, circleRadius, circleRadius);
                } else {
                    noFill();
                    stroke(0);
                    ellipse(x, y, circleRadius, circleRadius);
                }
            }
        }
    }
}

function update() {

    if(inputTxt) {
        textTyped = inputTxt.value();
        setUpText();
    }

     if(checkBox.checked() == 1) {
        filled = 1;
    } else {
        filled = 0;
    }

    // Get the value from the radius slider
    circleRadius = radiusSlider.value();
    // Get the value from the font size slider
    fontSize = sizeSlider.value();
}


function setUpText(){
    textImg = createGraphics(width, height);
    textImg.pixelDensity(1);
    textImg.background(255);
    textImg.textAlign(CENTER, CENTER);
    textImg.textFont(font);
    textImg.textSize(fontSize);
    textImg.text(textTyped, width/2, height/2 - 100);
    textImg.loadPixels();
}
```

## Step 5

```js
'use strict';

let font;
let textImg;
let pointDensity = 10;
let gradient;   // Declare the gradient variable 

let textTyped = 'ABC';
let inputTxt;

let checkBox;
let filled = 1;

let radiusSlider;
let circleRadius = 5;

let sizeSlider;
let fontSize = 150;


function preload(){
    font = loadFont('../data/freeSansBold.ttf');
    // Preload a gradient image to be used as fill colour
    gradient = loadImage('../images/gradient.png');
}

function setup(){
    noStroke();

    let canvas = createCanvas(730, 500);
    canvas.parent('#canvasHolder');

    inputTxt = createInput('ABC');
    inputTxt.class('inputTxt');
    inputTxt.changed(update);
    inputTxt.parent('#textController');

    checkBox = createCheckbox('Fill', true);
    checkBox.parent('#fillController');
    checkBox.changed(update);

    radiusSlider = createSlider(5, 20, circleRadius);
    radiusSlider.parent('#radiusController');
    radiusSlider.mouseReleased(update);

    sizeSlider = createSlider(50, 700, fontSize);
    sizeSlider.parent('#sizeController');
    sizeSlider.mouseReleased(update);

    setUpText();

    // Load the image pixels
    gradient.loadPixels();
}

function draw() {
    background(255);

    for(let y = 0; y < height; y += pointDensity) {
        for(let x = 0; x < width; x += pointDensity) {

            let index = (x + y * textImg.width) * 4;
            let r = textImg.pixels[index];

            if(r < 128) {
                // Set each rgba colour to a pixel from gradient image
                let r = gradient.pixels[index];
                let g = gradient.pixels[index + 1];
                let b = gradient.pixels[index + 2];
                let a = gradient.pixels[index + 3];
                // Declare the colour using the rgba gradient pixels
                let col = color(r, g, b, a);
                
                // Set the colour and stroke to the new value
                if (filled) {
                    fill(col);
                    noStroke();
                    ellipse(x, y, circleRadius, circleRadius);
                } else {
                    noFill();
                    stroke(col);
                    ellipse(x, y, circleRadius, circleRadius);
                }
            }
        }
    }
}

function update() {

    if(inputTxt) {
        textTyped = inputTxt.value();
        setUpText();
    }

     if(checkBox.checked() == 1) {
        filled = 1;
    } else {
        filled = 0;
    }

    circleRadius = radiusSlider.value();

    fontSize = sizeSlider.value();
}

function setUpText(){
    textImg = createGraphics(width, height);
    textImg.pixelDensity(1);
    textImg.background(255);
    textImg.textAlign(CENTER, CENTER);
    textImg.textFont(font);
    textImg.textSize(fontSize);
    textImg.text(textTyped, width/2, height/2 - 100);
    textImg.loadPixels();
}

// Save canvas as a png file
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), '.png');
}
```

#### Results:

![Gradiet text 1](../images/type_03.png?raw=true "Gradiet text 1")
![Gradiet text 2](../images/type_03a.png?raw=true "Gradiet text 2")
![Gradiet text 3](../images/type_03b.PNG?raw=true "Gradient text 3")
