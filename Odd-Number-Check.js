// Problem-6 Odd Number Check

function oddNumbercheck(number) {
    const result = number % 2;
    if (result != 0) {
        return true;
    }
    else {
        return false;
    }
}

const myNumber = 35;
const getResult = oddNumbercheck(myNumber);
console.log(getResult);