var moonInfoShown = false;

var moonContainer = document.getElementById('moon');
var marsContainer = document.getElementById('mars');
var gasContainer = document.getElementById('gas-giants');
var kuiperContainer = document.getElementById('kuiper-belt');

moonContainer.onclick = () => {moonAppear()};

function moonAppear() {
    let moonInfo = document.getElementById('moon-info');
    if(!moonInfoShown) {
        moonInfo.classList.remove('disappear');
        moonInfo.classList.add('appear'); 

        moonInfo.style.display = 'block';
        moonInfo.style.opacity = '1';

        moonInfoShown = !moonInfoShown;
    }
    else {
        moonInfo.classList.remove('appear');
        moonInfo.classList.add('disappear');
        
        setTimeout(() => {
            moonInfo.style.display = 'none';
            moonInfo.style.opacity = '0';
            moonInfoShown = !moonInfoShown;
        }, 125)   
    }
    
}