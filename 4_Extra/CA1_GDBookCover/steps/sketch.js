/** Using lines to show the chapters using a function for shape */

'use strict';

var len;
var angle = 0;
var chapters = [20, 164, 312, 458, 476];
var sub_chapters = [180, 200, 256, 286, 318, 320, 346, 368, 390, 410, 432, 458, 474];
var colour;

function setup() {
    createCanvas(1240, 1748);
    colorMode(HSB);

    background(287, 26, 33);
}

function draw() {
    // Calling the headings functions where the text is located
    headings();

    translate(width / 2, height / 2 + 150);
    blendMode(LIGHTEST);

    for (var i = 0; i < chapters.length; i++) {
        colour = color(20, 81, 95);
        rotate(radians(angle) + chapters[i]);
        len = chapters[i]+200;
        shape();
        dots();
        }
        for (var j = 0; j < sub_chapters.length; j++) {
            colour = color(186, 49, 61);
            rotate(radians(angle) + sub_chapters[j]);
            len = sub_chapters[j]+200;
            shape();
            dots();
    }

}

function shape() {
    beginShape();
    rotate(radians(angle));
    stroke(colour);
    strokeWeight(2);
    line(0, 0, len, 0);
    endShape();
}

function dots() {
    stroke(colour);
    strokeWeight(15);

    if (chapters) {
        point(len, 5 - chapters.length);
    } else if (sub_chapters) {
        point(len, 5 - sub_chapters.length);
    }
}

function headings() {
    var x = width-300;
    var y = height-130;

    // Main heading
    noLoop();
    noStroke();
    fill(186, 49, 61);
    textSize(150);
    text("GENERATIVE", 100, 200);
    text("DESIGN", 506, 310);
    // Sub-heading
    textSize(40);
    fill(20, 81, 95);
    text("Visualise, Program, and Create with JavaScript in p5.js", 125, 400);
    // Credits
    textSize(30);
    fill(186, 49, 61);
    text("Benedict Grob, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni", 50, height-150);
    // Credits line
    strokeWeight(2);
    stroke(20, 81, 95);
    line(x, y, x-490, y);
    // Sub-credits
    textSize(30);
    noStroke();
    fill(186, 49, 61);
    text("with contributions from Joey Lee and Niels Poldervaart", 450, height-90);
}

function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp() + 'png');
}
