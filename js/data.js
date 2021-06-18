
const counter = function () {
    const futureDate = new Date('june 18, 2022 00:00:00').getTime()
    const now = new Date().getTime();
    console.log(futureDate, now);
    const gap = futureDate - now;
    //console.log(gap);
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    const texDays = Math.floor(gap / days);
    const textHours = Math.floor((gap % days) / hours);
    const textMins = Math.floor((gap % hours) / minutes);
    const textSecs = Math.floor((gap % minutes) / seconds);
    console.log(texDays, textHours, textMins, textSecs);
    document.querySelector('#count__d').innerHTML = texDays;
    document.querySelector('#count__h').innerHTML = textHours;
    document.querySelector('#count__m').innerHTML = textMins;
    document.querySelector('#count__s').innerHTML = textSecs;
};

//counter();

document.addEventListener('DOMContentLoaded',
    function() {
        setInterval(counter, 1000);
    }
);