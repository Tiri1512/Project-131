img = "";

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload() {
    img = loadImage('Cat_Dog.jpg'); 
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#7F00F");
    text("Cat", 45, 75);
    noFill();
    stroke("#922B3E")
    rect(30, 60, 450, 350);
}
