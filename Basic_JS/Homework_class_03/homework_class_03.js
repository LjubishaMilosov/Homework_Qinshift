// Student Exercise - #3
// The Age Calculator
// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the age based on those years.
// outputs the result to the screen like so: "You are NN years old"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birth_year) {
  let currentYear = getCurrentYear();
  let myAge = currentYear - birth_year;
  return myAge;
}

function getCurrentYear() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return currentYear;
}

console.log(calculateAge(1983));



// function getCurrentDate() {
//   let currentDate = new Date();
//   let currentYear = currentDate.getFullYear();
//   let currentMonth = currentDate.getMonth() + 1; // In JavaScript, months are indexed starting from 0 -> Add 1 to get the correct month
//   let currentDay = currentDate.getDate();
//   let fullCurrentDate = `Full current date is ${currentYear}/${currentMonth}/${currentDay}`;
//   return fullCurrentDate;
// }

// console.log(getCurrentDate());



// HOMEWORK Part 1

// Write a JavaScript function which accepts a parameter
// and returns its type and prints it in the console.
// Try to call the functions 5 times for 5 different types:

// object
// boolean
// number
// string
// undefined

function getParameterType(param) {
  let paramType = typeof param;
  return paramType;
}

console.log(getParameterType(null)); // object
console.log(getParameterType(true)); // boolean
console.log(getParameterType(1)); // number
console.log(getParameterType("1")); // string
console.log(getParameterType()); // undefined
console.log(getParameterType(isNaN)); // function



//    HOMEWORK Part 2
// Write a JavaScript function that will return:

// Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
// Note: Call the function in console to see answer

function calculateDogAgeInDogYears() {
    let ageInHumanYears = parseInt(prompt("Please enter dog's age in human years."));
    let humanTodDogsYears = ageInHumanYears * 7;
    return humanTodDogsYears;
}

console.log(`Dog's age in dogs years is ${calculateDogAgeInDogYears()}`);


// Bonus: Make the same function work for converting dog to human years as well

function convertDogToHumanYears() {
    let ageInDogYears = parseInt(prompt("Please enter dog's age in dog's years."));
    let dogTohumanYears = ageInDogYears /7;
    return dogTohumanYears

}

console.log(`Dog's age in human years is ${convertDogToHumanYears()}`);


//   HOMEWORK Part 3

// Write a javascript function for an ATM:
// The ATM should give cash
// Should return "Not enough money" if you request more money
// Should return the ammount withdrawn and money left on the account if you have enough
// Note: Hardcode your account money in the program
// Bonus: Make it work with prompt()!

let accountMoney = 1000;
let withdrawalAmount = parseInt(
  prompt("Please enter the amount you want to withdraw.")
);
function withdrawMoney() {
  if (
    typeof withdrawalAmount !== "number" ||
    withdrawalAmount <= 0 ||
    isNaN(withdrawalAmount)
  ) {
    return "Please enter a valid number!";
  } else if (withdrawalAmount > accountMoney) {
    return "Not enough money. Please try again!";
  } else {
    return `Withdrawal Successful! You have withdrawn: ${withdrawalAmount} dollars. Your current balance is ${
      accountMoney - withdrawalAmount
    } dollars.`;
  }
}

console.log(withdrawMoney());
