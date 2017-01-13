// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("hi");

function setup() {
  var myCanvas=createCanvas(800, 250); //putting this canvas in a variable
  myCanvas.parent('mySketch')
  background(252);
}

function draw() {
  if(mouseIsPressed) {
      fill(0);
  }
  else {
      fill(255);
  }
  ellipse(mouseX, mouseY, 50,50);
}
