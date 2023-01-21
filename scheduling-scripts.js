let initialMonth = "Select Month";
let initialDay = "Select Day";
let initialYear = "Select Year";
date = new Date();

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
    
    if(document.getElementById('month').innerText != initialMonth) {
        console.log('displaying day...')
        document.getElementById('day-button').style.display = 'block';
    }
}



document.getElementById('day').innerText = initialDay;
document.getElementById('day-lower').onclick = changeDayButton;
document.getElementById('day-higher').onclick = changeDayButton;

function changeDayButton() {
    console.log('changing day...')
    var currDay = parseInt(document.getElementById('current-day'));
    var change = 0;
    var max = getMaxDay(document.getElementById('month').innerText);
    if(this.id == 'day-lower')
    {
        change = 1;
    }
    else 
    {
        change = -1;
    }
    if(currDay + change > max) {
        changeDay(0);   
    }
    else if(currDay + change < 0) {
        changeDay(max);
    }
    else {
        changeDay(currDay + change);
    }
}

function changeDay(day) {
    document.getElementById('current-day').innerText = day;
}

function getMaxDay(month) {
    switch(month) {
        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "October":
        case "December":
            return 31;
            break;
        case "April":
        case "June":
        case "September":
        case "November":
            return 30;
            break;
        case "February":
            var year = date.getFullYear();
            if((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
                return 29;
                break;
            }
            
            return 28;
            break;
    }
    return -1;
}