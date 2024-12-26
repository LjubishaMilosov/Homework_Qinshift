// HOMEWORK Part 2
// Create a header generator

// Create two inputs, one for text and one for color
// Create a button that says: generate h1
// When the button is clicked create a new header below the inputs and button
// The new header should have the text and color from the inputs
// Additionally create an h3 element for messages
// If the person enters an invalid color or an empty text show an error message in the h3 element
//  You must use JQuery to complete the task


jQuery(function(){
   
    let textInput = $("#text");
    let colorInput = $("#color");
    let button = $("button");
    let h1 = $("#h1");
    let h3 = $("#message");

    button.click(function(){
        let text = textInput.val();
        let color = colorInput.val();
        
        if (text === "" || color === "" || !isValidColor(color)) {
            h3.text("Invalid input");
        } else {
            h1.text(`Hello ${text}`).css("color", color);
            h3.text("");
            textInput.val("");
            colorInput.val("");
        }
    });

    function isValidColor(color) {
        const hexColorPattern = /^#[0-9A-Fa-f]{6}$/;
        const namedColors = ["red", "green", "blue", "yellow", "black", "white", "gray", "purple", "orange", "pink", "brown"];
        return hexColorPattern.test(color) || namedColors.includes(color.toLowerCase());
    }

});


// Create dynamically in the HTML file
jQuery(function(){
    let div = $("<div>").attr("id", "dynamic-inputs");
    let textInput = $("<input>").attr("id", "dynamic-text");
    let colorInput = $("<input>").attr("id", "dynamic-color");
    let button = $("<button>").text("Generate h1");
    let h1 = $("<h1>");
    let h3 = $("<h3>").attr("id", "dynamic-message");
    $("body").append(div, textInput, colorInput, button, h1, h3);

    button.click(function(){
        let text = textInput.val();
        let color = colorInput.val();
        
        if (text === "" || color === "" || !isValidColor(color)) {
            h3.text("Invalid input");
        } else {
            h1.text(`Hello ${text}`).css("color", color);
            h3.text("");
            textInput.val("");
            colorInput.val("");
        }
    });

    function isValidColor(color) {
        const hexColorPattern = /^#[0-9A-Fa-f]{6}$/;
        const namedColors = ["red", "green", "blue", "yellow", "black", "white", "gray", "purple", "orange", "pink", "brown"];
        return hexColorPattern.test(color) || namedColors.includes(color.toLowerCase());
    }
});