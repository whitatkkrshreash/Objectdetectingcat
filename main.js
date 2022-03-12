img = "";
status = "";
objects = [];

function preload() {
    img = loadImage("GettyImages-988013222-scaled-e1618857975729.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
}

function modelLoaded() {
    console.log("Model Loaded Succesfuly, Btw why are you in the console?");
    status = true;
    objectdetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log("Error occured use the app properly,Idiot");
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(img, 0, 0, 640, 420);
    if (status != "") {
        for (var i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            fill(255, 0, 0);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(255, 0, 0);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}