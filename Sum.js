// Problem-7 Sum: 1+2+3+4+5+6+7

function allNumberSum(numbers) {
    let sum = 0;
    for (let i = 1; i <= numbers; i++){
        sum = sum + i;
    }
    return sum;
}

const myNumber = 4;
const getSumResult = allNumberSum(myNumber);
console.log(getSumResult);