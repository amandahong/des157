// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("hi");

//two pupils
var rEyeX = 320;
var rEyeY = 200;
var rEyeXCur = rEyeX;
var rEyeYCur = rEyeY;

var lEyeX = 480;
var lEyeY = 200;
var lEyeXCur = lEyeX;
var lEyeYCur = lEyeY;

var shift = 10;


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
  var ptrDist = dist(lEyeX,lEyeY, mouseX, mouseY);
  var ratio = shift / ptrDist;
  lEyeXCur = ratio* (mouseX - lEyeX) + lEyeX;
  lEyeYCur = ratio* (mouseY - lEyeY) + lEyeY;
//draws out the face with eyes
  ellipse(400, 250, 350, 350);
  fill(252);
  ellipse(320,200, 80, 50);
  ellipse(480,200, 80, 50);
  fill(50);
//draws out pupils
  ellipse(rEyeXCur,rEyeYCur, 30, 30);
  ellipse(lEyeXCur,lEyeYCur, 30, 30);
//draws a line on mouse click
  if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY)
    }

  if (mouseButton == RIGHT){
     background(255);
  }
}
