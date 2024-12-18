// Homework #6
// Title: Looping structures

// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]



function createFullNames(firstNames, lastNames) {
    
    if (!Array.isArray(firstNames) || !Array.isArray(lastNames)) {
      return "Error: Both inputs must be arrays.";
    }
    if (firstNames.length !== lastNames.length) {
      return "Error: Both arrays must have the same length.";
    }
    const fullNames = [];
  
    
    for (let i = 0; i < firstNames.length; i++) {
      fullNames.push(`${i + 1}. ${firstNames[i]} ${lastNames[i]}`);
    }
  
    return fullNames; 
  }
  
  const first_names = ["Tijana", "Murat", "Ljubisha"];
  const last_names = ["Stojanovska", "Koca", "Milosov"];
  const full_names = createFullNames(first_names, last_names);

  console.log(full_names);
 
  