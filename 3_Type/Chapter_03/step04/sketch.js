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

    checkBox = createCheckbox('', true);
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