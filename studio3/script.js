// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var pen = document.getElementById('pen');
    var book = document.getElementById('book');
    var close = document.getElementsByClassName('close');
    var items = [pen, book];

    for (a = 0; a < items.length; a++) {
        items[a].addEventListener('click', function() {
            var id = this.getAttribute('id') + 'Info';
            // grab ID of the element that was clicked on, append "Info" to match the ID of the popup
            var elem = document.getElementById(id);
            // get the popup with the corresponding ID
            elem.style.display = "block";
        })
    }


    for (i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function() {
            this.parentElement.style.display = "none";
            //parent element is the aside box because close is nested within the aside
        })
    }


    //book




});
