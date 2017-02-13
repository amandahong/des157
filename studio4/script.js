// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //tool tip for title
    var title = document.getElementById('title');
    var titleTip = document.getElementById('titleTip');
    var tipTimer;

    title.addEventListener('mouseover', function() {
        console.log('mouseover on title');
        tipTimer = setTimeout(showTitleTip, 1000);
    });

    title.addEventListener('mouseout', function() {
        console.log('mouseout on title');
        clearTimeout(tipTimer);
        titleTip.style.opacity = 0;
    });

    function showTitleTip() {
        console.log('showing msg');
        titleTip.style.opacity = 0.5;
        titleTip.style.transition = 'all .5s';
    }

    // tool tip for plants
    var plants = document.getElementById('plants');
    var plantTip = document.getElementById('plantTip');
    var tipTimer;

    plants.addEventListener('mouseover', function() {
        console.log('mouseover on plant');
        tipTimer = setTimeout(showPlantTip, 1000);
    });

    plants.addEventListener('mouseout', function() {
        console.log('mouseout on plant');
        clearTimeout(tipTimer);
        plantTip.style.opacity = 0;
    });

    function showPlantTip() {
        console.log('showing msg');
        plantTip.style.opacity = 0.5;
        plantTip.style.transition = 'all .5s';
    }

    // tool tip for timeline
    var time = document.getElementById('time');
    var timeTip = document.getElementById('timeTip');
    var tipTimer;

    time.addEventListener('mouseover', function() {
        console.log('mouseover on timeline');
        tipTimer = setTimeout(showTimeTip, 1000);
    });

    time.addEventListener('mouseout', function() {
        console.log('mouseout on timeline');
        clearTimeout(tipTimer);
        timeTip.style.opacity = 0;
    });

    function showTimeTip() {
        console.log('showing msg');
        timeTip.style.opacity = 0.5;
        timeTip.style.transition = 'all .5s';
    }

    // butterfly animation
    var butterfly = document.querySelector("#butterfly");
    var angle = 0,
        lastTime = null;

    function animate(time) {
        if (lastTime != null)
            angle += (time - lastTime) * 0.001;
        lastTime = time;

        butterfly.style.left = (Math.cos(angle) * 100) + "px";
        butterfly.style.top = (Math.sin(-angle) * 100) + "px";
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

});
