// Exercise 8
// Create a function that takes an array of objects as input. Each object reprsents a person with the following properties: fullName , job, and salary. The function should return the sum of the salaries of the people.

// Hint: the array can be fixed and given in the code.


function sumSalaries(inputArray){
    if (!Array.isArray(people)) {
        return "Input is not an array";
    }

    let sum = 0;
    for( let person of inputArray){
        if (typeof person.salary === 'number') {
            sum += person.salary;
        }
    }
    return sum;
}

let people = [{fullName: "Petko Petkovski", job: "doctor", salary: 2000}, {fullName: "Stefan Stefanovski", job: "lawyer", salary: 1500}];

console.log(sumSalaries(people));
