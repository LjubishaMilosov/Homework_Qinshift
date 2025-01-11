// Exercise 9
// Create a constructor function for creating pets. Each pet should have the following properties:

// name - that is the name of the pet
// type - which is the type of animal the pet is
// age - the age of the pet
// isHealthy - whether the pet is healthy or sick
// owner - the person who owns the pet
// isAdopted - a method that returns true or false depending of whether the pet has a owner


// Create a constructor function for person (pet owner). It should have the following properties:

// firstName - The first name of the person
// lastName - The last name of the person
// age - The age of the person
// One print method that prints the person details.


// Create an array of pets (some of them should have the same owner). Create an array of people.

// In the html, add an input field in which you can enter a person's first name. Add a button. On click of that button, find the person in the array and find all the pets whose owner he/she is.



function Pet(name, type, age, isHealthy, owner){
    //this -> the object we are creating
    this.name = name;
    this.type=type;
    this.age=age;
    this.isHealthy = isHealthy;
    this.owner = owner;
    this.isAdopted = function(){
        // if(owner){
        //     return true;
        // }else{
        //     return false;
        // }

        //return owner //will return the whole owner
       // return !owner //will return boolean negative of the actual value
        return !!owner; //will return boolean, if the owner has value, one ! will return falsy and another ! will return true
                        //will return boolean, if the owner does not have value (ex. null), one ! will return true and another ! will return false
    }
}

function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.print = function(){
        console.log(`First name: ${this.firstName}`);
        console.log(`Last name: ${this.lastName}`);
        console.log(`Age: ${this.age}`);
        
    }
}

let pets  = [new Pet("Bonnie", "dog", 3, true, "Ana"), new Pet("Ragi", "cat", 4, true, "Ana"), new Pet("Ardi", "dog", 4, false)];
let people = [new Person("Petko", "Petkovski", 25), new Person("Ana", "Petkovska", 35)];

let myInput = document.getElementById("myInput");
let myButton = document.getElementById("myButton");

myButton.addEventListener("click", function(){
    if(!myInput.value)
    {
        console.log("You must enter a value!");
        return;
    }

    let petOwner;
    for(person of people){
        if(person.firstName.toLowerCase() === myInput.value.toLowerCase()){
            petOwner = person;
            break;
        }
    }

    if(!petOwner) // if it is undefined (we haven't found an owner)
    {
        console.log("We haven't found the entered value as owner!");
        return;
    }

    let adoptedPets = [];
    for(let pet of pets){
        console.log(pet.owner);
        console.log(!!pet.owner);
        console.log(petOwner.firstName);
        if(!!pet.owner && pet.owner.toLowerCase() === petOwner.firstName.toLowerCase()){
            adoptedPets.push(pet);
        }
    }
    console.log(adoptedPets);
});



