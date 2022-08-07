// Problem-9 Revers Way Factorial: 1*2*3*4*5*6*7

function factorial(numbers) {
    let result = 1;
    for (let i = numbers; i >= 1; i--){
        result = result * i;
    }
    return result;
}


const myNumber = 3;
const getFactorialResult = factorial(myNumber);
console.log(getFactorialResult);