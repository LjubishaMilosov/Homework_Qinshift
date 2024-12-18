// Homework #5
// Title: Looping structures

// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

// Bonus: Try making the function work if there are other types of items in it

// Initial Solution:

function findLargestValue(inputArray) {
  let index = 0;
  let maxValue = inputArray[0];
  while (index < inputArray.length) {
    if (maxValue < inputArray[index]) {
      maxValue = inputArray[index];
    }
    index++;
  }
  return maxValue;
}

function findLowestValue(inputArray) {
  let index = 0;
  let minValue = inputArray[0];
  while (index < inputArray.length) {
    if (minValue > inputArray[index]) {
      minValue = inputArray[index];
    }
    index++;
  }
  return minValue;
}

function sumMaxMin(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && !isNaN(arr[i])) {
          numbersOnly.push(arr[i]);
        }
      }
  if (numbersOnly.length === 0) {
    return "Error: The array contains no valid numbers.";
  }
  let max = findLargestValue(numbersOnly);
  let min = findLowestValue(numbersOnly);
  let sum = max + min;
  return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}

const arr = [3, 0.5, 5, "text", 6, 8, null, NaN, 11];
console.log(sumMaxMin(arr));


// Simplified Version(using the keyword "continue"):

function sumMaxMin(arr) {
  let numbersOnly = []; 

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || isNaN(arr[i])) {
      continue;
    }
    numbersOnly.push(arr[i]); 
  }
  if (numbersOnly.length === 0) {
    return "Error: The array contains no valid numbers.";
  }
  let max = numbersOnly[0];
  let min = numbersOnly[0];

  for (let i = 1; i < numbersOnly.length; i++) {
    if (numbersOnly[i] > max) {
      max = numbersOnly[i];
    }
    if (numbersOnly[i] < min) {
      min = numbersOnly[i];
    }
  }

  const sum = max + min;
  return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}

const arr1 = [3, 0.5, 5, "text", 6, 8, null, 11];
console.log(sumMaxMin(arr1));


// Simplified Version 2 (without keyword "continue"):

function sumMaxMin(arr) {
    let numbersOnly = []; 
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number" && !isNaN(arr[i])) {
        numbersOnly.push(arr[i]);
      }
    }
    if (numbersOnly.length === 0) {
      return "Error: The array contains no valid numbers.";
    }
  
    let max = numbersOnly[0];
    let min = numbersOnly[0];
  
    for (let i = 1; i < numbersOnly.length; i++) {
      if (max < numbersOnly[i] ) {
        max = numbersOnly[i];
      }
      if (min > numbersOnly[i]) {
        min = numbersOnly[i];
      }
    }
  
    const sum = max + min;
    return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
  }
  
 
  const arr2 = [3, 0.5, 5, "text", 6, 8, null, 11];
  console.log(sumMaxMin(arr2)); 
