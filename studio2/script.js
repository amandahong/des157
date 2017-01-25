// p5 file
// studio 2 JS
// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("hi");

//capture the submit event
  document.f.onsubmit = processForm;

  //define process function
  function processForm() {

    //store user name in a variable
    var userName = document.f.userName.value;
   // alert('Hi ' + userName);

    //store userColor in a variable called userColor

    var userColor = document.f.userColor.value;

    var myMsg = document.getElementById('myMsg');

    myMsg.innerHTML= ('Hi ' + userName + ' I also like ' + userColor);
    //comment out the alert message above

    //call a new alert() to concatenate a message with userName and userColor

     //prevent page from reloading
    return false;

  }
/*
function mouseIsPressed()
{

}
*/
