// Problem-9 Get odd number sum

function sumAllNumberAnArray(numbers) {
    let sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var index = i;
        var element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}


//////////////

function getOddNumbersOfArray(number) {
    const oddNumbers = [];
    for (let i = 0; i < number.length; i++){
        const index = i;
        const element = number[index];
        if (element % 2 !== 0) {
            // console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}




const myNumber = [45, 89, 65, 32, 75, 20, 12, 32, 56, 95];
const oddNumbersResult = getOddNumbersOfArray(myNumber);
console.log(oddNumbersResult);
const oddNumberSum = sumAllNumberAnArray(oddNumbersResult);
console.log("Odd Number Sum: ", oddNumberSum);


