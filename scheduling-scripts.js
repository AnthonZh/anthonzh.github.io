let initialMonth = "Select Month";
let initialDay = "Select Day";
let initialYear = "Select Year";

//The function to show/unshow the month selection button.
document.getElementById('month').innerText = initialMonth;
let monthShown = false;
document.getElementById("month").onclick = show;

function show() {
    var monthSelection = document.getElementById('month-selections');
    if(!monthShown)
    {    
        monthSelection.style.display = 'block'; 

        let width = document.querySelector('#longest').offsetWidth;
        monthSelection.style.width = width + width/4;

        monthShown = !monthShown;
    }
    else 
    {
        monthSelection.style.display = 'none';
        monthSelection.style.width = 0;
        monthShown = !monthShown;
    }
}

months = document.getElementsByClassName('month-options');
