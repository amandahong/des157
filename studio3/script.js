// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var bag = document.getElementById('bag');
    var pen = document.getElementById('pen');
    var book = document.getElementById('book');
    var charger = document.getElementById('charger');
    var tea = document.getElementById('tea');
    var earphone = document.getElementById('earphone');

    var close = document.getElementsByClassName('close');

    var items = [bag, pen, book, charger, tea, earphone];

//loop to assign info boxes to pictures and show on click
    for (a = 0; a < items.length; a++) {
        items[a].addEventListener('click', function() {
            var id = this.getAttribute('id') + 'Info';
            // grab ID of the element that was clicked on, append "Info" to match the ID of the popup
            var elem = document.getElementById(id);
            // get the popup with the corresponding ID
            elem.style.display = "block";
        })
    }

//loop to assign the close function to the X
    for (i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function() {
            this.parentElement.style.display = "none";
            //parent element is the aside box because close is nested within the aside
        })
    }

});
