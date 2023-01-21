let initialMonth = "Select Month";
let initialDay = "Select Day";
let initialYear = "Select Year";


document.getElementById('month').innerText = initialMonth;
let monthShown = false;
document.getElementById("month").onclick = clickMonth;

months = document.getElementsByClassName('month-option');
for(i in months) {
    months[i].onclick = selectMonth;
}

//Month Functions
//The function which 'selects' a month.
function selectMonth() {
    var monthSelection = document.getElementById('month');
    monthSelection.innerText = this.innerText;
    clickMonth();
}

//The function to show/unshow the month selection button.
function clickMonth() {
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



document.getElementById('day').innerText = initialDay;
