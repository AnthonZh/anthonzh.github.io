function numberToMonth(date) {
    switch(date.getMonth()) {
        case 0:
            return "January";
        case 1:
            return "February";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
        default:
            return "Error, Please Try Again";
    }
}

function padZero(number) {
    let pad = "" + number;
    while(pad.length < 2) {
        pad = " " + pad;
    }
    return pad;
}

const date = new Date();

let month = numberToMonth(date);
let year = date.getFullYear();

document.getElementById('current-month').innerText = month + " " + year;

const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
