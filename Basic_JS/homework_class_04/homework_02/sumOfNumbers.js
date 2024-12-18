// HOMEWORK #2
// Write a function that will take an array of 5 numbers as an argument and return the sum.

// Print it in the console or in alert

// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.

function validateNumber(num) {
  return typeof num === "number" && !isNaN(num);
}

function sumOfNumbers(numArray) {
  for (let num of numArray) {
    if (!validateNumber(num)) {
      return "Error: One or more elements in the array is not a valid number.";
    }
  }
  let sum = 0;
  for (const num of numArray) {
    sum += num;
  }
  return sum;
}

let numArray = [56, 12, 4, 7, 44, "4"];
let result = sumOfNumbers(numArray);

if (typeof result === "string") {
  console.log(result);
  alert(result);
} else {
  console.log(`The sum is: ${result}`);
  alert(`The sum is: ${result}`);
}
