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