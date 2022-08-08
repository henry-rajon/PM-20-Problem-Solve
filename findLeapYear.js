// Practice Problem-2

function findLeapYear(years) {
    const leapYear = [];
    for (let i = 0; i < years.length; i++){
        const index = i;
        const element = years[index];
        if (element % 4 === 0) {
            leapYear.push(element);
        }
    }
    return leapYear;
}

const yearsValue = [2023, 2024, 2025, 2028, 2030];
const getLeapYear = findLeapYear(yearsValue);
console.log(getLeapYear);