// Exercise 3
// Write a function that takes an array of numbers as input. It should divide the even and odd numbers in two arrays. Then print the arrays.

// Bonus: Instead of instantly printing them, try to think how would you return them.


function divideEvenOddNumbersIntoSeparateArrays(arrayOfNumbers){

    if(!Array.isArray(arrayOfNumbers)) {
        console.log("Input is not an array");
        return;
    }

let evenNumbers = [];
let oddNumbers = [];

for(let item of arrayOfNumbers){
    if(isNaN(item)){
        console.log(`${item} is not a number`);
        continue;
    }

    if(item % 2 === 0){
        evenNumbers.push(item);
    } else{
        oddNumbers.push(item);
    }
}
    console.log("Even numbers:", evenNumbers);
    console.log("Odd numbers:", oddNumbers);

};


let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
let array3 = [1, 'a', 2, 'b', 3, 'c'];

divideEvenOddNumbersIntoSeparateArrays(array1);
divideEvenOddNumbersIntoSeparateArrays(array2);
divideEvenOddNumbersIntoSeparateArrays(array3);


// Bonus: Instead of instantly printing them, try to think how would you return them.

function divideEvenOddNumbersIntoSeparateArraysBonus(arrayOfNumbers) {
    if (!Array.isArray(arrayOfNumbers)) {
        console.log("Input is not an array");
        return;
    }

    const evenNumbers = [];
    const oddNumbers = [];

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (isNaN(arrayOfNumbers[i])) {
            console.log(`${arrayOfNumbers[i]} is not a number`);
            continue;
        }

        if (arrayOfNumbers[i] % 2 === 0) {
            evenNumbers.push(arrayOfNumbers[i]);
        } else {
            oddNumbers.push(arrayOfNumbers[i]);
        }
    }

    return {
        evenNumbers: evenNumbers,
        oddNumbers: oddNumbers
    }
};

// Example usage:
let result1 = divideEvenOddNumbersIntoSeparateArraysBonus(array1);
console.log("Even numbers:", result1.evenNumbers);
console.log("Odd numbers:", result1.oddNumbers);

const result2 = divideEvenOddNumbersIntoSeparateArraysBonus(array2);
console.log("Even numbers:", result2.evenNumbers);
console.log("Odd numbers:", result2.oddNumbers);

const result3 = divideEvenOddNumbersIntoSeparateArraysBonus(array3);
console.log("Even numbers:", result3.evenNumbers);
console.log("Odd numbers:", result3.oddNumbers);
