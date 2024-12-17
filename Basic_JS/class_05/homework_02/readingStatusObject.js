// HOMEWORK Part 2
// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// Bonus: enter the values from prompt()


const book = {
    
    title: prompt("Enter the book title:"), 
    author: prompt("Enter the book author:"), 
    readingStatus: confirm("Have you already read this book? (OK for Yes, Cancel for No)"),
    
    getReadingStatus: function () {
      if (this.readingStatus) {
        return `Already read '${this.title}' by ${this.author}.`;
      } else {
        return `You still need to read '${this.title}' by ${this.author}.`;
      }
    },
  };
  
  console.log(book.getReadingStatus()); 
  alert(book.getReadingStatus());