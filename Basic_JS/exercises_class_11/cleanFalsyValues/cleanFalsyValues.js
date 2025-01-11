// Exercise 1
// Write a function that takes an array as input and cleans it from the falsy values. Example: if the array is [NaN, 3, 2, 0, undefined, "sedc", true, false] it should return [3, 2, "sedc", true]. Note: You shouldn't change the existing array.

// Test input:

// [2, 5, ['a', 'b', 'c'], "sedc"]
// [2, NaN , 7, ['a', 'b', 'c'], null, "sedc", 0]

function cleanFalsyValues(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] ){
            result.push(arr[i]);
        }
    }
    return result;
}

function cleanFalsyValues2(arr) {
    let result = [];
    for(item of arr){
        if(item){
            result.push(item);
        }
    }
    return result;
}

function cleanFalsyValues3(arr) {
    return arr.filter(value => Boolean(value));
}

let array = [NaN, 3, 2, 0, undefined, "sedc", true, false];
let array2 = [2, 5, ['a', 'b', 'c'], "sedc"];
let array3 = [2, NaN , 7, ['a', 'b', 'c'], null, "sedc", 0];

console.log(cleanFalsyValues(array));
console.log(cleanFalsyValues2(array2));
console.log(cleanFalsyValues3(array3));