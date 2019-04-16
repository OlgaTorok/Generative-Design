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