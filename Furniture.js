img="";

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}

function preload(){
    img=loadImage('funuture.jpg');
}

function draw(){
    image(img,0,0,640,420);
    fill("#f72585");
    text("Chair",300,75);
    noFill();
    stroke("#f72585");
    rect(290,60,290,320);
}