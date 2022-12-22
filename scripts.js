var leftBoundAppeared = false;
var rightBoundAppeared = false;

var initFirstY = document.getElementById('invisible-one').getBoundingClientRect().top + window.scrollY - (document.getElementById('invisible-one').getBoundingClientRect().height/2);
var initSecondY = document.getElementById('invisible-two').getBoundingClientRect().top + window.scrollY - (document.getElementById('invisible-two').getBoundingClientRect().height/2);

function appearLeftBound() {
    if(window.scrollY >= initFirstY) {
        document.getElementById('invisible-one').classList.add('animated');
        console.log('Making leftbound visible');

        document.getElementById('invisible-one').setAttribute('id', 'visible-one');
        console.log("Changed invisible id");

        leftBoundAppeared = true;
    }   
}

function appearRightBound() {
    if(window.scrollY >= initSecondY)
    {
        document.getElementById('invisible-two').classList.add('animated');
        console.log('Making rightBound visible');

        document.getElementById('invisible-two').setAttribute('id', 'visible-two');
        console.log("Changed invisible id");

        rightBoundAppeared = true;
    }
}

window.onscroll = function() {
    if(!leftBoundAppeared) {
        appearLeftBound();
    }

    if(!rightBoundAppeared) {
        appearRightBound();
    }
}