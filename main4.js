img = ""
statusOne = ""
objects = []

function setup() {
    canvas = createCanvas(380, 380)
    canvas.center()
}

function preload() {
    img = loadImage("meme.webp")
}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
}

function modelLoaded() {
    console.log("modelo iniciado")
    statusOne = true
    objectDetector.detect(img, gotResults)
    document.getElementById("status").innerHTML = "status detectando objeto..."
}

function gotResults(error, results) {
    if (error) {
        console.log(error)
    }
    console.log(results)
    objects = results
    document.getElementById("status").innerHTML = "status: objeto detectado"
}
function draw() {
    image(img, 0, 0, 380, 380)
    if (statusOne != "") {
        r = random(255);
        g = random(255);
        b = random(255);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Objeto(s) Detectado(s)";
            fill(r, g, b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r, g, b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}



function index1() {
    window.location = "index1.html"
}
function index2() {
    window.location = "index2.html"
}
function index3() {
    window.location = "index3.html"
}
function index4() {
    window.location = "index4.html"
}


