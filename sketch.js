var canvas;
var mic;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(windowWidth/2, -windowHeight/2.5);
  canvas.style('z-index', '-1');
  mic = new p5.AudioIn();
  mic.start();
  //background(175);
}

function mousePressed() {
  clear();
}

function draw() {
  var vol = mic.getLevel();
  ellipse(width/2, height/2, vol*width/3.5);
 // ellipse.position(0, 0);
  
  
}