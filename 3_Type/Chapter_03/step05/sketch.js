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

    checkBox = createCheckbox('Fill colour', true);
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