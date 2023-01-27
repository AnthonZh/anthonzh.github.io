var moonInfoShown = false;

var moonContainer = document.getElementById('moon');
var marsContainer = document.getElementById('mars');
var gasContainer = document.getElementById('gas-giants');
var kuiperContainer = document.getElementById('kuiper-belt');

document.getElementById('moon-button').onclick() = displayMoonInfo;

function displayMoonInfo() {
    var moonInfo = document.getElementById('moon-info');
    if(!moonInfoShown) {
        moonInfo.style.display = 'block';
    }
}