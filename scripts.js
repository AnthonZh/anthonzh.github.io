leftBoundAppeared = false;
rightBoundAppeared = false;
function appearLeftBound() {
    if(!leftBoundAppeared) {
        let leftBound = document.getElementById('invisible-one');
        let leftBoundRect = leftBound.getBoundingClientRect();
        let initLeftBoundY = leftBoundRect.top;
        if(screenY = initLeftBoundY && !leftBoundAppeared) {
            document.getElementById('invisible-one').classList.add('animated');
            console.log('Making leftbound visible');
            document.getElementById('invisible-one').setAttribute('id', 'visible-one');
            console.log("Changed invisible id");
            leftBoundAppeared = true;
        }
    }   
}
function appearRightBound() {
    if(!rightBoundAppeared)
    {
        let rightBound = document.getElementsByClassName('right-bound-container');
        let rightBoundRect = rightBound[0].getBoundingClientRect();
        let initRightBoundY = rightBoundRect.top;
        if(screenY = initRightBoundY && !rightBoundAppeared) {
            document.getElementById('invisible-two').classList.add('animated');
            console.log('Making rightBound visible');
            document.getElementById('invisible-two').setAttribute('id', 'visible-two');
            console.log("Changed invisible id");
            rightBoundAppeared = true;
        }
    }
}

window.onscroll = function() {
    appearLeftBound();
    //appearRightBound();
}