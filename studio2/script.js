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
        var adj1 = document.f.adj1.value;

        var famous = document.f.famous.value;

        var verb = document.f.verb.value;

        var song = document.f.song.value;

        var adj2 = document.f.adj2.value;

        var adj3 = document.f.adj3.value;

        var noun = document.f.noun.value;

        var myMsg = document.getElementById('myMsg');



            //print out into message
            myMsg.innerHTML = 'Brian Imanuel, also known as Rich Chigga is a ' + adj1 + ' up and coming hip hop artist, hailing from Jakarta, Indonesia. He gets most of his inspiration from ' + famous + ' and is known to ' + verb + ' to ' + song + ' as an artistic pastime. Rich Chigga is also a/an ' + adj2 + ' comedian, often posting humorous bits to Twitter, such as, “My moves are ' + adj3 + ' dont even try” and “did U just disrespect my ' + noun + '?".' + ' <br><br>  Here is a final quote from Rich Chigga: “Dont comment "i love you" on my instagram. u dont even know what love is. u dont know what it feels like.”'

            ;
            myMsg.className = "show";


    /*
        if (userName = "" || userColor = "") {
            alert('please fill out!');
        } else {
            myMsg.className = "show";
            myMsg.innerHTML = 'Hi ' + userName + ' I also like ' + userColor;

        }
  */
        //prevent page from reloading
        return false;

    }

    //clear form
    function clearForm() {
        myMsg.className = "hide";
    }



});
