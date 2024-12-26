// HOMEWORK Part 2
// Create a header generator

// Create two inputs, one for text and one for color
// Create a button that says: generate h1
// When the button is clicked create a new header below the inputs and button
// The new header should have the text and color from the inputs
// Additionally create an h3 element for messages
// If the person enters an invalid color or an empty text show an error message in the h3 element
//  You must use JQuery to complete the task



//  with input type="color" attribute set in the HTML, for the color input:

jQuery(function () {
  let textInput = $("#text");
  let colorInput = $("#color");
  let button = $("button");
  let h1 = $("#h1");
  let h3 = $("#message");

  button.click(function () {
    let text = textInput.val();
    let color = colorInput.val();

    if (text === "") {
      h3.text("Invalid input");
    } else {
      h1.text(`Hello ${text}`).css("color", color);
      h3.text("");
      textInput.val("");
      colorInput.val("");
    }
  });
});
