// Practice Problem-3

function getSumOfAllNumber(numbers) {
    let sum = 1;
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}

const myNumber = [5, 7, 8, 10, 45, 30];
const getResultOfSum = getSumOfAllNumber(myNumber);
console.log(getResultOfSum);