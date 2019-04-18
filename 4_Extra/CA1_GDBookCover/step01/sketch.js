/** Using lines and points to visualise the chapters of a book */

'use strict';
// Declared variables
var len;
var angle = 0;
var colour; 
// Array of chapters and subchapters
var chapters = [20, 164, 312, 458, 476];
var sub_chapters = [180, 200, 256, 286, 318, 320, 346, 368, 390, 410, 432, 458, 474];


function setup() {
    createCanvas(1240, 1748);
    colorMode(HSB);
    background(287, 26, 33);
}

function draw() {
    noLoop();
    // Calling the headings function
    headings();
    // Translates the drawing approximately to the middle of the page
    translate(width / 2, height / 2 + 150);
    // Adds the blend mode for the lightest colour
    blendMode(LIGHTEST);

    /** Draw the lines and points */
    // For each main chapter
    for (var i = 0; i < chapters.length; i++) {
        colour = color(20, 81, 95);
        // Rotate using the chapters array as angle
        rotate(radians(angle) + chapters[i]);
        // Length is also the chapter's length plus some added length
        len = chapters[i] + 200;
        // Call shape and dot functions which draws the line and point
        shape();
        dots();

        /** For each subchapter, do the same as the chapter but
            with a different colour, angle and length */
        for (var j = 0; j < sub_chapters.length; j++) {
            colour = color(186, 49, 61);
            rotate(radians(angle) + sub_chapters[j]);
            len = sub_chapters[j]+200;
            shape();
            dots();
        }
    }
}

/** Shape function containing the line */
function shape() {
    // Using begin and end shape to create a single line
    beginShape();
    rotate(radians(angle));
    stroke(colour);
    strokeWeight(2);
    line(0, 0, len, 0);
    endShape();
}

/** Dot function containing the point at the end of the line */
function dots() {
    stroke(colour);
    strokeWeight(15);
    // Add the point for each chapter and subchapter
    if (chapters) {
        point(len, 5 - chapters.length);
    } else if (sub_chapters) {
        point(len, 5 - sub_chapters.length);
    }
}

/** Function containing the text on the canvas */
function headings() {
    // Set the x and y for the footer
    var x = width-300;
    var y = height-130;
    noStroke();

    // Main heading
    textSize(150);
    fill(186, 49, 61);
    text("GENERATIVE", 100, 200);
    text("DESIGN", 506, 310);

    // Sub-heading
    textSize(40);
    fill(20, 81, 95);
    text("Visualise, Program, and Create with JavaScript in p5.js", 125, 400);

    // Footer
    textSize(30);
    fill(186, 49, 61);
    text("Benedict Grob, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni", 50, height-150);
    // Footer line
    strokeWeight(2);
    stroke(20, 81, 95);
    line(x, y, x-490, y);
    // Sub-footer
    textSize(30);
    noStroke();
    fill(186, 49, 61);
    text("with contributions from Joey Lee and Niels Poldervaart", 450, height-90);
}

// If the key S is pressed the canvas will save as a png file
function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp() + '.png');
}