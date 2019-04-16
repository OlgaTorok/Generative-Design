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
     checkBox = createCheckbox('', true);
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