// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    /*
        var nood = Snap.select("#noodle"),
            bowl = nood.select("#bowl"),
            noods = nood.select("#noods"),
            meat = nood.select("#meat"),
            leaves = nood.select("#leaves"),

            timer;
    */

    var angle = 0;

    var steam = anime({
        targets: '#steam',
        translateY: 20,
        duration: 1000,
        loop: true,
        easing: 'easeInOutQuad',
        direction: 'alternate',
    });

console.log(`anime.easings`);

    var noods = anime({
        targets: '#noods',
        translateX: 20,
        duration: 2000,
        loop: true,
        easing: 'easeInOutQuad',
        direction: 'alternate',
    });




});
