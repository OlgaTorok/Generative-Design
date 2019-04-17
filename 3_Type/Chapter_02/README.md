[Type](../)

# 2. Draw text on canvas using OpenType font

This exercise uses OpenType font file. The text is manipulated using the opentype methods to draw the text on canvas.

## Step 1

```js
// Declare variables for font
let font;
let textTyped = 'ABC';
let path;

function setup() {
    createCanvas(500, 500);
    // Load the font with all its functions
    opentype.load('../data/FreeSans.otf', function(err, f) {
        if(err){
            console.log('Error');
        } else {
            font = f;
            noLoop();
        }
    });
}

function draw() {
    // If there is no font return nothing
    if(!font) return;
    background(255);
    translate(20, 220);
    
    if(textTyped.length > 0) {
        // Call the getpath function to get a path from opentype
        let fontPath = font.getPath(textTyped, 0, 0, 200);
        console.log(fontPath);

        // Get the points in the path which are in the commands
        // Convert them to a g.Path object
        path = new g.Path(fontPath.commands);
        // Resample the path with only 10 px between them
        // The less pixels the more points are returned
        path = g.resampleByLength(path, 10);
        console.log(path);
    }
}
```

## Step 2

[Test](step02/)

```js
let font;
let textTyped = 'ABC';
let path;

function setup() {
    createCanvas(500, 500);
    opentype.load('../data/FreeSans.otf', function(err, f) {
        if(err){
            console.log('Error');
        } else {
            font = f;
            noLoop();
        }
    });
}

function draw() {
    if(!font) return;
    background(255);
    translate(20, 220);
    
    if(textTyped.length > 0) {
        let fontPath = font.getPath(textTyped, 0, 0, 200);
        console.log(fontPath);

        path = new g.Path(fontPath.commands);
        path = g.resampleByLength(path, 10);
        console.log(path);
    }

    // Add fill, stroke and diameter to the objects
    fill(0);
    noStroke();
    let diameter = 5;

    // Go through array to get the points and draw them
    for(let i = 0; i < path.commands.length; i++) {
        let pnt = path.commands[i];
        ellipse(pnt.x, pnt.y, diameter, diameter);
    }
}

function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), '.png');
}
```

#### Result: 

![OpenType font on canvas](../images/type_02.png?raw=true "OpenType font on canvas")

