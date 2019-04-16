// Declare variables
let font;
let textImg;

// Preload the font
function preload(){
    font = loadFont('../data/freeSansBold.ttf');
}


function setup(){
    createCanvas(500, 500);
    // Call the text graphic function
    setUptext();
    // Add the graphic created to the screen
    image(textImg, 0, 0);
}


function draw(){}


// Create the image using graphics 
function setUptext(){
    textImg = createGraphics(500, 500);
    textImg.pixelDensity(1);
    textImg.background(225);
    // Use the font that that was preloaded
    textImg.textFont(font);
    textImg.textSize(100);
    textImg.text('ABC', 150, 250);
}