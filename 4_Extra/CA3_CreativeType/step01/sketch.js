'use strict';
// Declare variables for text
let font;
let gradient;
let textImg;
let pointDensity = 10;
var shapeAngle = 0;

// Add the sliders and input boxes
let textTyped = 'Hello';
let inputTxt;

let checkBox;
let filled = 1;

let check;
let animate = true;

let radiusSlider;
let circleRadius = 5;

let sizeSlider;
let fontSize = 150;

let animateSlider;
let anim = 1;


// Preload the font and  gradient image
function preload() {
    font = loadFont('../data/freeSansBold.ttf');
    gradient = loadImage('../images/gradient.png');
}

function setup() {
    // Set the rectangle and angle mode
    rectMode(CENTER, CENTER);
    angleMode(DEGREES);
    noStroke();

    // Create and call canvas from the DOM
    let canvas = createCanvas(730, 500);
    canvas.parent('#canvasHolder');

    // Create sliders 
    radiusSlider = createSlider(1, 20, circleRadius);
    radiusSlider.parent('#radiusController');
    radiusSlider.mouseReleased(update);

    sizeSlider = createSlider(10, 700, fontSize);
    sizeSlider.parent('#sizeController');
    sizeSlider.mouseReleased(update);

    animateSlider = createSlider(1, 10, anim);
    animateSlider.parent('#animateController');
    animateSlider.mouseReleased(update);

    // Create checkboxes
    checkBox = createCheckbox(' FILL', true);
    checkBox.changed(update);
    checkBox.parent('#fillController');

    check = createCheckbox(' ANIMATE', true);
    check.class('check');
    check.changed(update);
    check.parent('#animeController');

    // Create input text
    inputTxt = createInput('Hello');
    inputTxt.class('inputTxt');
    inputTxt.changed(update);
    inputTxt.parent('#textController');

    // Load the image pixels and call the text function
    gradient.loadPixels();
    setupText();
}

function draw() {
    background(51, 100);
    noFill();
    noStroke();

    // Create a grid in x and y direction
    for(let y = 0; y < height; y += pointDensity){
        for(let x = 0; x < width; x += pointDensity){

            // Call each pixel in the image by using the index value
            let index = (x + y * textImg.width) * 4;
            // Create the rgb value using the index
            let r = textImg.pixels[index];
            
            // If the red value is less than 128 then fill the shape with the gradient colour
            if (r < 128) {
                // Set the RGBA values using the gradient pixels
                let r = gradient.pixels[index];
                let g = gradient.pixels[index + 1];
                let b = gradient.pixels[index + 2];
                let a = gradient.pixels[index + 3];

                let col = color(r, g, b, a);
                // Calculate the angle of the shape
                var angle = atan2(mouseY - y, mouseX - x) + (shapeAngle * (PI / 180));

                // If statement that creates the shapes
                if (animate) {
                    push();
                    translate(x, y);
                    rotate(angle);
                    noFill();
                    stroke(col);
                    strokeWeight(anim);
                    line(0, 0, circleRadius, circleRadius);
                    pop();
                } else if (animate == 0 && filled) {
                    fill(col);
                    noStroke();
                    rect(x, y, circleRadius, circleRadius);
                } else {
                    noFill();
                    stroke(col);
                    ellipse(x, y, circleRadius, circleRadius);
                } 
            }
        }
    }
}

// Create an update function to update values using the DOM values
function update() {
    // Get the value from the radius slider
    circleRadius = radiusSlider.value();
    // Get the value from the font size slider
    fontSize = sizeSlider.value();
    // Slider that changes the font weight of the line
    anim = animateSlider.value();

     // If the checkbox is checked, fill the shape
    if(checkBox.checked() == 1) {
        filled = 1;
    } else {
        filled = 0;
    }
    // Animate if checkbox true
    if (check.checked() == true) {
        animate = true;
    } else {
        animate = false;
    }
    
    // If there is an input get the value and draw it on canvas
    if (textTyped) {
        textTyped = inputTxt.value();
        setupText();
    }
}

// Create the text image 
function setupText() {
    textImg = createGraphics(width, height);
    textImg.pixelDensity(1);
    textImg.background(255);
    textImg.textAlign(CENTER, CENTER);
    textImg.textFont(font);
    textImg.textSize(fontSize);
    textImg.text(textTyped, width/2, height/2 - 100);
    textImg.loadPixels();
}

// Save the canvas if down arrow is pressed
function keyPressed() {
    if (keyCode === DOWN_ARROW) saveCanvas(gd.timestamp(), '.png');
}