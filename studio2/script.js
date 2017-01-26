// p5 file
// studio 2 JS
// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("hi");

//capture the submit event
  document.f.onsubmit = processForm;

  //define process function
  function processForm() {

    //store names in variables
    var userName = document.f.userName.value;

    var userColor = document.f.userColor.value;

    var myMsg = document.getElementById('myMsg');

    //print out into message
    myMsg.innerHTML= ('Hi ' + userName + ' I also like ' + userColor);



     //prevent page from reloading
    return false;


  }


/*
  document.forms[0].addEventListener('reset', function() {
      document.getElementById('myMsg').innerHTML = '';
  });


*/
