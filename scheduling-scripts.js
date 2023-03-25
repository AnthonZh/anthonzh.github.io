let initialMonth = "Select Month";
let initialDay = "Select Day";
let initialYear = "Select Year";
date = new Date();

document.getElementById('month').innerText = initialMonth + "       ";
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
        monthSelection.style.margin = 'auto';
        monthSelection.style.textAlign = 'center';
        monthSelection.style.justifyContent = 'center';
        monthSelection.style.alignItems = 'center';
        monthSelection.style.width = 'fit-content';

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
        changeDay(1);
        document.getElementById('day-button').style.display = 'block';
    }
}

document.getElementById('day').innerText = initialDay;
document.getElementById('day-lower').onclick = changeDayButton;
document.getElementById('day-higher').onclick = changeDayButton;
document.getElementById('select-day').onclick = selectDay;
document.getElementById('day').onclick = openDay;

var dayShown = true;

function changeDayButton() {
    var currDay = parseInt(document.getElementById('current-day').innerText);
    var change = 0;
    var max = getMaxDay(document.getElementById('month').innerText);
    if(this.id == 'day-lower')
    {
        change = -1;
    }
    else 
    {
        change = 1;
    }
    if(currDay + change > max) {
        changeDay(1);   
    }
    else if(currDay + change < 1) {
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

function selectDay() {
    dayButton = document.getElementById('day')
    dayButton.innerText = document.getElementById('current-day').innerText;
    document.getElementById('select-day-button').style.display = 'none';
    document.getElementById('year-button').style.display = 'block';
}

function openDay() {
    var container = document.getElementById('select-day-button')
    if(!dayShown) {
        container.style.display = 'block';
    }
    else {
        container.style.display = 'none';
    }
    dayShown = !dayShown;
}

document.getElementById('year').innerText = initialYear;
var yearShown = true;
document.getElementById('year').onclick = showYear;

var years = document.getElementsByClassName('year-option');
for(i in years) {
    years[i].onclick = selectYear;
}

function selectYear() {
    document.getElementById('year').innerText = this.innerText;
    document.getElementById('year-options').style.display = 'none';
    yearShown = false;

    if (document.getElementById('year') != initialYear) {
        document.getElementById('select').style.display = 'block';
    }
}

function showYear() {
    if(!yearShown) {
        document.getElementById('year-options').style.display = 'block';
    }
    else {
        document.getElementById('year-options').style.display = 'none';
    }
    yearShown = !yearShown;
}

var selectButton = document.getElementById('select-button');
selectButton.onclick = select;

function select() {
    if(!(available())) {
        alert("Please select a valid date; this date is unavailable.");
        return;
    }
    let confirmed = confirm("Scheduling for " + document.getElementById('day').innerText + " " + document.getElementById('month').innerText + ", "  + document.getElementById('year').innerText)
    if(confirmed) {
        document.getElementById('training').style.display = 'block';
    } 
}

function available() {
    var selectedDate = new Date(document.getElementById('month').innerText + " " + document.getElementById('day').innerText + ", " + document.getElementById('year').innerText + " 00:00:00");
    if(selectedDate.getTime() <= date.getTime()) {
        return false;
    }
    return true;
}

function selectTraining(text) {
    let confirmed = confirm("Scheduling a training in " + text.innerText);
    if(confirmed) {
        window.location.href="trip.html";
    }
}

trainingLocations = document.getElementsByClassName('training-location');

trainingLocations[0].onclick = () => {selectTraining(trainingLocations[0])};
trainingLocations[1].onclick = () => {selectTraining(trainingLocations[1])};
trainingLocations[2].onclick = () => {selectTraining(trainingLocations[2])};
trainingLocations[3].onclick = () => {selectTraining(trainingLocations[3])};
trainingLocations[4].onclick = () => {selectTraining(trainingLocations[4])};
trainingLocations[5].onclick = () => {selectTraining(trainingLocations[5])};
trainingLocations[6].onclick = () => {selectTraining(trainingLocations[6])};
trainingLocations[7].onclick = () => {selectTraining(trainingLocations[7])};
trainingLocations[8].onclick = () => {selectTraining(trainingLocations[8])};
trainingLocations[9].onclick = () => {selectTraining(trainingLocations[9])};