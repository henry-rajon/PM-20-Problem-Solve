// Problem-8 Calculate sum of all number of an array

function sumAllNumberAnArray(numbers) {
    let sum = 0;
    for (var i = 0; i < numbers.length; i++){
        var index = i;
        var element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}


const myNumber = [45, 89, 65, 32, 75, 20, 12, 32, 56, 95];
sumAllNumberAnArray(myNumber);
// console.log(getResult);

