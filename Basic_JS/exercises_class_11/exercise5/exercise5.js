// Exercise 5
// Write an html that has one input field, one button and one select element. The input and button have id-s, and the select only has class attribute. A user should enter input, click on the button, and on click an option should be added to the select with the entered value.

// On blur of the input, validate if there is value entered. If not, print a message. Remember to check this scenario on the click also!

let myInput = document.getElementById("myInput");
let myButton = document.getElementById("myButton");
let mySelect = document.getElementsByClassName("mySelect");
let message = document.getElementById("message");

myButton.addEventListener("click", function(){

    message.innerText = "";
    if(!myInput.value){
        message.innerText ="You have to enter a value";
        return;
    }

    let option = document.createElement("option");
    option.setAttribute("name", myInput.value);
    option.setAttribute("value", myInput.value);
    option.innerText =myInput.value;
    mySelect[0].appendChild(option);
    myInput.value = "";
});

myInput.addEventListener("blur", function(){
    message.innerText = "";
    if(!myInput.value){
        message.innerText ="You have to enter a value";
        return;
    }
    
})

