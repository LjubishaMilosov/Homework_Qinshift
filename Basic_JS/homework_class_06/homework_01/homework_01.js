let myTitle = document.getElementById("myTitle");
let myTitleText = myTitle.innerText;
console.log(myTitleText);

myTitle.innerText = "It's way cooler now that it's changed!";
console.log(myTitle.innerText);


let firstParagraph = document.querySelector("#first > p");
let firstParagraphText = firstParagraph.innerText;
console.log(firstParagraphText);

firstParagraph.innerText =
  "This is the first paragraph changed!And, Yeah it's pretty easy!";
console.log(firstParagraph.innerText);


let secondParagraph = document.querySelector(".second");
let secondParagraphText = secondParagraph.innerText;
console.log(secondParagraphText);

secondParagraph.innerText += " It's reaeaally EASY!";
console.log(secondParagraph.innerText);


let textTag = document.querySelector("text");
let textTagText = textTag.innerText;
console.log(textTagText);

textTag.innerText += " changing the text!";
console.log(textTag.innerText);


let h3Element = document.querySelector("div h3");
let h3ElementText = h3Element.innerText;
console.log(h3ElementText);

h3Element.innerText = "This has been changed as well";
console.log(h3Element.innerText);


let secondh3Element = h3Element.previousElementSibling;
let secondh3ElementText = secondh3Element.innerText;
console.log(secondh3ElementText);

secondh3Element.innerText =
  "I changed this last because I wanted to use 'previousElementSibling'";

console.log(secondh3Element.innerText);
