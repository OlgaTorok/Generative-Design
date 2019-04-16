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