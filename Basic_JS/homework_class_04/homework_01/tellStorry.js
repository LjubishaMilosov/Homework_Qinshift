// HOMEWORK #1
// Create a function called tellStory()

// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

// The function should return one big string with a story made from the arguments

// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

// The value that is returned from the function should be printed in the console or in alert

function tellStory(arr) {
    let [name, mood, activity] = arr;

    if (!Array.isArray(arr) || arr.length !== 3 ) {
        return "Invalid input! The input must be an array. The array must contain exactly three elements: name, mood, and activity.";
      }
      for (const item of arr) {
        if (typeof item !== 'string') {
          return "Invalid input! All elements in the array must be strings.";
        }
      }

    let story = `This is ${name}. ${name} is a nice person. Today, ${name} is ${mood}. ${name} is ${activity} all day. The end.`;

    return story;
}

let storyArray = ["John", "happy", "singing"];
let fullStory = tellStory(storyArray);
console.log(fullStory);
//alert(fullStory);

let storyArray2 = ["Alice", "happy", "singing"];
let fullStory2 = tellStory(storyArray2);
console.log(fullStory2);
//alert(fullStory2);