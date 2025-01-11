// Exercise 6
// Write an html that has two input fields, one button and one paragraph. In the input fields enter the sides of a rectangle.

// On click on the button, calculate the area and print it in the paragraph.

// On mouse over on the paragraph, print the perimeter and change the color and font size of the paragraph.


let sideA = document.getElementById("sideA");
let sideB = document.getElementById("sideB");
let myButton = document.getElementById("myButton");
let message = document.getElementById("message");

myButton.addEventListener("click", function(){
    
    if(!sideA.value || !sideB.value){
        message.innerText = "You must enter both sides of the rectangle";
        return;
    }
    message.style.removeProperty("color");
    message.style.removeProperty("fontSize");
   message.innerText = `The area is: ${sideA.value * sideB.value}`
})

message.addEventListener("mouseover", function(){
    if(!sideA.value || !sideB.value){
        this.innerText = "You must enter both sides of the rectangle";
        return;
    }
    this.innerText = `The perimeter is ${sideA.value * 2 + sideB.value * 2}`;
    this.style.color = "red";
    this.style.fontrSize = "2em";
});

// optimized way:



function validateInputs() {
    if (!sideA.value || !sideB.value) {
        message.innerText = "You must enter both sides of the rectangle";
        return false;
    }
    return true;
}

function calculateArea() {
    if (!validateInputs()) return;

    message.style.removeProperty("color");
    message.style.removeProperty("fontSize");
    message.innerText = `The area is: ${sideA.value * sideB.value}`;
}

function calculatePerimeter() {
    if (!validateInputs()) return;

    message.innerText = `The perimeter is ${2 * (sideA.value + sideB.value)}`;
    message.style.color = "red";
    message.style.fontSize = "2em";
}

myButton.addEventListener("click", calculateArea);
message.addEventListener("mouseover", calculatePerimeter);