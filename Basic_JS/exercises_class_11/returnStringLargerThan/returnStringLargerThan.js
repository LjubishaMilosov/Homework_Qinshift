// Exercise 4
// Write a function that takes an array of strings as an argument. It should return the first string larger than 10 characters.

// Think about the other scenarios.

function findString(inputArray, len){
    for(let item of inputArray){
        if(item.length > len){
    return item;
        }
    }
    return null;
}


let array1 = ["test", "no", "10", "chars"];
let array2 = ["test", "basic javascript"];

console.log(findString(array1, 10));
console.log(findString(array2, 10));




// with validation, using regular for loop:

function findFirstStringLargerThan(arrayOfStrings, length) {
    if (!Array.isArray(arrayOfStrings)) {
        return "Input is not an array";
    }

    if (typeof length !== 'number' || length < 0) {
        return "Invalid length input";
    }

    for (let i = 0; i < arrayOfStrings.length; i++) {
        if (typeof arrayOfStrings[i] !== 'string') {
            continue;
        }

        if (arrayOfStrings[i].length > length) {
            return arrayOfStrings[i];
        }
    }

    return `No string larger than ${length} characters found`;
}


console.log(findFirstStringLargerThan(array1, 10));
console.log(findFirstStringLargerThan(array2, 10));

console.log(findFirstStringLargerThan([], 10)); 
console.log(findFirstStringLargerThan("not an array", 10)); 
console.log(findFirstStringLargerThan(array1, -5)); 