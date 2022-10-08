function preload() {
    
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    circle(45, 45, 45);
    circle(80, 80, 80);
    circle(160, 160, 160);
    circle(320, 320, 320);
}

function take_snapshot() {
    SVGAElement('student_name.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}

