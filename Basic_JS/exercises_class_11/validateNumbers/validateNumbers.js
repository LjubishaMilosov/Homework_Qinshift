// Exercise 2
// Write a function that takes a number as input. Write the following checks for the number:

// Is it positive?
// Number of digits
// Is it even/odd
// Don't forget validation! Negative scenarios first!

function getNumberStats(inputNum) {
  if (isNaN(inputNum)) {
    console.log(`${inputNum} is not a number`);
    return;
  }
  checkPositivenegativeNumber(inputNum);
  console.log(getNumberOfDigits(inputNum));
  checkOddEvenNumber(inputNum);
}

function checkPositivenegativeNumber(inputNum) {
  if (inputNum > 0) {
    console.log(`${inputNum} is a positive number`);
  } else if (inputNum < 0) {
    console.log(`${inputNum} is a negative number`);
  } else {
    console.log(`${inputNum} is zero`);
  }
}

function getNumberOfDigits(inputNum) {
  let counter = 0;
  if (inputNum == 0) {
    counter++;
    return counter;
  }
  while (inputNum != 0) {
    counter++;
    inputNum = parseInt(inputNum / 10);
  }
  return counter;
}

function checkOddEvenNumber(inputNum) {
  if (inputNum % 2 == 0) {
    console.log(`${inputNum} is an even number`);
  } else {
    console.log(`${inputNum} is an odd number`);
  }
}

getNumberStats(0); //0 is considered an even number because it is divisible by 2 without a remainder
getNumberStats(100);
getNumberStats(-1001);
getNumberStats("Qinshift");


// Solution 2:

function getNumberStatistics(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return "Input is not a valid number.";
  }

  const isPositive = num > 0;
  const numberOfDigits = Math.abs(num).toString().length;
  const isEven = num % 2 === 0;

  return {
    isPositive: isPositive,
    numberOfDigits: numberOfDigits,
    isEven: isEven,
  };
}

console.log(getNumberStatistics(123));
console.log(getNumberStatistics(-456));
console.log(getNumberStatistics(0));
console.log(getNumberStatistics("abc"));
console.log(getNumberStatistics(NaN));
