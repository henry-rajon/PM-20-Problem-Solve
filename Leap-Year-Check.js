// Problem-7 Leap Year Check

function leapYearCheck(year) {
    const result = year % 4;
    if (result === 0) {
        return true;
    }
    else {
        return false;
    }
}

const yearValue = 1952;
const getresult = leapYearCheck(yearValue);
console.log(getresult);