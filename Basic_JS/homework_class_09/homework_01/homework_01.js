// HOMEWORK Part 1

// Create a greeting app with JQuery
// Create an input
// Create a button
// When clicked the button should print a greet message in an h1 header
// Ex: input: Petko output message: Hello there Petko!
// You must use JQuery to complete the task

jQuery(function(){

let input = $("#name");
let button = $("#btn");
let greetingMsg = $("#greeting");

button.click(function(){
    greetingMsg.text(`Hello there ${input.val()}!`);
    input.val("");

    });

});

// Create dynamically in the HTML file input  with id="dynamic-name"  and a button with id="dynamic-btn" and a h1 header with id="dynamic-greeting" in the HTML file:

jQuery(function(){

    let input = $("<input>").attr("id", "dynamic-name");
    let button = $("<button>").attr("id", "dynamic-btn").text("Greet");
    let greetingMsg = $("<h1>").attr("id", "dynamic-greeting");
    $("body").append(input, button, greetingMsg);

    button.click(function(){
        greetingMsg.text(`Hello there ${input.val()}!`);
        input.val("");
    
        });
    
    });

