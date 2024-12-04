let phonePrice = 119.95;
let tax = 5;
let totalNumOfPhones = 30;


//Solution 1:

let phonePriceWithTax = phonePrice + (phonePrice * tax / 100);

let totalPriceWithTax = phonePriceWithTax * totalNumOfPhones;
console.log(`The total price for 30 phones incling tax is ${totalPriceWithTax}`)

//Solution 2:

let totalPrice = phonePrice * totalNumOfPhones;
console.log(totalPrice);
let totalTax = (totalPrice * tax / 100);
console.log(totalTax);
totalPriceWithTax = totalPrice + totalTax;
console.log(`The total price for 30 phones incling tax is ${totalPriceWithTax}`);