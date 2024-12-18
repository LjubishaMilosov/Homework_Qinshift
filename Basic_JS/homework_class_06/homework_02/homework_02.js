// HOMEWORK Part 2
// Print all numbers from an array and the sum

// Create an array with numbers
// Print all numbers from the array in a list element, in the HTML page
// Print out the sum of all of the numbers below the list
// Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)

let array = [1, 2, 3, 4];

function renderArrayItems(array, container) {
   container.innerHTML = "";
  const ul = document.createElement("ul");
  for (const item of array) {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  }
  container.appendChild(ul);
}
const container1 = document.getElementById("list_of_Numbers");
let numbers = renderArrayItems(array, container1);

let sum = 0;
function printSumOfNumbersInArray() {
//   let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(printSumOfNumbersInArray(array));



function renderSumOfNumbers(sum, container2){
    container2.innerHTML = "";
    const p = document.createElement("p");
    p.textContent =  `The sum of all numbers in the array is ${sum}`;
    container2.appendChild(p);
}

const container2 = document.getElementById("sum_of_numbers");
let sumOfNumbers = renderSumOfNumbers(sum, container2);

function renderEquation(array, sum, container3){
    container3.innerHTML = "";
    const p = document.createElement("p");

    let equation = "";
    for(let i = 0; i <array.length; i++){
        equation += array[i];
        if(i < array.length - 1) {
            equation += " + ";
        }
    }
    equation += ` = ${sum}`;

    p.textContent = `The equation is: ${equation}`;
    container3.appendChild(p);
}

const container3 = document.getElementById("container3");
let printedEquation = renderEquation(array, sum, container3);

