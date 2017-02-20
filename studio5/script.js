// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var nood = document.getElementById('noodle');
    var bowl = document.getElementById('bowl');
    var noods = document.getElementById('noods');
    var meat = document.getElementById('meat');
    var leaves = document.getElementById('leaves');

    steam.addEventListener('click', function() {
        steamAnimate.play();
        console.log('click')
    });

    var steamAnimate = anime({
        targets: '#steam',
        translateY: 20,
        duration: 1000,
        loop: true,
        easing: 'easeInOutQuad',
        direction: 'alternate',
    });

    var noodsAnimate = anime({
        targets: '#noods',
        translateX: 20,
        duration: 2000,
        loop: true,
        easing: 'easeInOutQuad',
        direction: 'alternate',
    });

    var meatAnimate = anime({
        targets: '#meat',
        translateX: 10,
        duration: 2000,
        loop: true,
        easing: 'easeInOutQuad',
        direction: 'alternate',
    });

    var leavesAnimate = anime({
        targets: '#leaves',
        translateX: 10,
        duration: 1000,
        loop: true,
        easing: 'easeInOutQuad',
        direction: 'alternate',
    });

});
