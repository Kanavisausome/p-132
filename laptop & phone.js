objectDetector = "";
img= "";
objects = [];
status = ""; 

function preload(){
img = loadImage('Fruits.jpeg');
}

function setup() {
canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
console.log("Model Loaded!")
status = true;
objectDetector.detect(img, gotResult);
}

function draw() {
image(img, 0, 0, 640, 420);
fill("#FF0000");
text("Dog", 45, 75);
notFill();
stroke("#FF0000");
rect(30, 60, 450, 350 );

fill("#FF0000");
text("Cat", 320, 120);
noFill();
stroke("#FF0000");
rect(300, 90, 270, 320);
}

function gotResult(error, results) {
if (error) {
console.log(error);
}
console.log(results);
}function preload(){
img = loadImage('laptop & phone.jpeg');
}

function setup() {
canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
console.log("Model Loaded!")
status = true;
objectDetector.detect(img, gotResult);
}

function draw() {
image(img, 0, 0, 640, 420);
fill("#FF0000");
text("Dog", 45, 75);
notFill();
stroke("#FF0000");
rect(30, 60, 450, 350 );

fill("#FF0000");
text("Cat", 320, 120);
noFill();
stroke("#FF0000");
rect(300, 90, 270, 320);
}

function gotResult(error, results) {
if (error) {
console.log(error);
}
console.log(results);
}