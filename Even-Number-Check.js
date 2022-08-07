// Problem-5 Even Number Check

function evenNumberCheck(number) {
    const result = number % 2;
    if (result === 0) {
        return true;
    }
    else {
        return false;
    }
}


const myNumber = 30;
const getResult = evenNumberCheck(35);
console.log(getResult);


