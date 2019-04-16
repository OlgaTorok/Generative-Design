let font;
let textImg;
// Add variables for tiles
let numTiles = 100;
let tileW;

function preload() {
    font = loadFont('../data/freeSansBold.ttf');
}

function setup() {
    createCanvas(500, 500);
    setUptext();
    // Set the width of the tile
    tileW = width / numTiles;
}

function draw() {
    // Add the colour and stroke for the text
    noStroke();
    fill(100, 0, 0);
    
    // Draw the tiles in the x and y direction on the canvas
    for(let y = 0; y < height; y += tileW) {
        for(let x = 0; x < width; x += tileW) {

             // Using a formula to calculate each pixels from the image
            let index = (x + y * textImg.width) * 4;

            // Draw the ellipse for each pixel in the graphic
            // if the pixel colour is less than 128
            if(textImg.pixels[index] < 128) {
                ellipse(x, y, tileW, tileW);
            }
        }
    }
}

function setUptext() {
    textImg = createGraphics(500, 500);
    textImg.pixelDensity(1);
    textImg.background(225);
    textImg.textFont(font);
    textImg.textSize(200);
    textImg.text('ABC', 20, 200);
    textImg.loadPixels();
}

function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), numTiles + '_tiles' + '.png');
}