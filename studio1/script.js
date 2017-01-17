// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("hi");

//two pupils
var rEyeX = 220;
var rEyeY = 200;
var rEyeXCur = rEyeX;
var rEyeYCur = rEyeY;

var lEyeX = 380;
var lEyeY = 200;
var lEyeXCur = lEyeX;
var lEyeYCur = lEyeY;

var shift = 10;
var baseColor = 252;


function setup() {
  //putting this canvas in a variable
  var myCanvas=createCanvas(800, 250);
  myCanvas.parent('mySketch')
  background(252);
}


function draw()
{
//adds location interaction for pupils with mouse location
  var ptrDist = dist(rEyeX,rEyeY, mouseX, mouseY);
  var ratio = shift / ptrDist;
  rEyeXCur = ratio * (mouseX - rEyeX) + rEyeX;
  rEyeYCur = ratio * (mouseY - rEyeY) + rEyeY;
  ptrDist = dist(lEyeXCur,lEyeYCur, mouseX, mouseY);
  ratio = shift / ptrDist;
  lEyeXCur = ratio* (mouseX - lEyeX) + lEyeX;
  lEyeYCur = ratio* (mouseY - lEyeY) + lEyeY;
//draws out the face with eyes
  ellipse(300,250, 400, 400);
  fill(255);
  ellipse(220,200, 80, 50);
  ellipse(380,200, 80, 50);
  fill(0);
//draws out pupils
  ellipse(rEyeXCur,rEyeYCur, 30, 30);
  ellipse(lEyeXCur,lEyeYCur, 30, 30);
//draws a line
  line(pmouseX, pmouseY, mouseX, mouseY);
}

/*
function mouseIsPressed()
{

}
*/
