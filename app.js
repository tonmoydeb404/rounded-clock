//CREATED BY TOM
//https://github.com/tdtonmoydeb
//@tdtonmoydeb


'use strict';

function resizeClock() {
    //    COLLECTING ALL DATAS FROM HTML
    var circle = document.querySelectorAll('.clock-shape');
    var clockSize = getComputedStyle(document.documentElement).getPropertyValue('--clockSize');
    var circleSize = 'calc(' + clockSize + ' / 2)';
    var circleRadius = 'calc((' + clockSize + ' / 2) - 1rem)';

    //    RESIZING THE CIRCLE SIZE ACRODING TO THE SVG SIZE
    for (let i = 0; i < circle.length; i++) {
        circle[i].setAttribute('cy', circleSize);
        circle[i].setAttribute('cx', circleSize);

        circle[i].setAttribute('r', circleRadius);
    }
}

clockFun()

function clockFun() {
    //    GETTING THE TIME 
    let time = new Date();
    let hour = time.getHours();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    //    STYLING THE HOURS AND MINUTES
    hour = (hour > 12) ? hour - 12 : hour;
    hour = (hour < 10) ? '0' + hour : hour;
    min = (min < 10) ? '0' + min : min;

    //    UPDATEING THE CIRCLE LOADER VALUE WITH SECONDS
    document.documentElement.style.setProperty('--loadingSize', sec);
    //    SELECTING THE HOUR, MINUTE AND COLON
    const hourTxt = document.querySelector('.hour');
    const minTxt = document.querySelector('.min');
    var colon = document.querySelector('.colon');
    //    UPDATING THEM WITH HOUR AND MINUTE VALUE
    hourTxt.innerHTML = hour;
    minTxt.innerHTML = min;
    //    ADDING SIMPLE SECOND EFFECT TO THE COLON
    if (!colon.classList.contains('sec')) {
        colon.classList.add('sec')
    }
    //    CALLING THIS FUNCTION TO UP TO DATE THE TIME
    setInterval(clockFun, 1000);
}
