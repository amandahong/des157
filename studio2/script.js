// JavaScript Document
console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


    //capture the submit event
    document.f.onsubmit = processForm;
    document.f.onreset = clearForm;

    //define process function
    function processForm() {

        //store names in variables
        var userName = document.f.userName.value;

        var userColor = document.f.userColor.value;

        var myMsg = document.getElementById('myMsg');


        /*
            //print out into message
            myMsg.innerHTML = 'Hi ' + userName + ' I also like ' + userColor;
            myMsg.className = "show";
        */


        if (userName = "" || userColor = "") {
            alert('please fill out!');
        } else {
            myMsg.className = "show";
            myMsg.innerHTML = 'Hi ' + userName + ' I also like ' + userColor;

        }

        //prevent page from reloading
        return false;

    }

    //clear form
    function clearForm() {
        myMsg.className = "hide";
    }



});
