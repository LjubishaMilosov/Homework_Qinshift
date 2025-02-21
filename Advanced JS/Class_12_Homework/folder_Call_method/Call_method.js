// # Homework

// ## Task 1
// Create a Person constructor function that has:
// * id
// * firstName
// * lastName
// * age
// * getFullName - method

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Create an Animal constructor function that has:
// * name
// * age
// * eat - method
// * sleep - method

function Animal(name, age) {
    this.name = name;
    this.age = age;
    this.eat = function() {
        console.log("Eating");
    }
    this.sleep = function() {
        console.log("Sleeping");
    }
}

// Create a Cat constructor function that inherits from Animal and has:
// * color
// * ownerId - id of a person that is the owner of the cat - it can be null
// * meow - method that writes in the console: The cat [name] says Meow.

function Cat(name, age, color, ownerId) {
    Animal.call(this, name, age);
    this.color = color;
    this.ownerId = ownerId;
    this.meow = function() {
        console.log(`The cat ${this.name} says Meow`);
    }
}

// Set up inheritance
Object.setPrototypeOf(Cat.prototype, Animal.prototype);
// Object.setPrototypeOf(Cat.prototype, Animal.prototype): 
// This sets the prototype of Cat.prototype to Animal.prototype, 
// ensuring that Cat correctly inherits from Animal.

Cat.prototype.getOwnerDetails = function() {
    if (this.ownerId === null) {
        console.log(`The cat ${this.name} does not have an owner.`);
    } else {
        let owner = people.reduce((acc, person) => {
            return person.id === this.ownerId ? person : acc;
        }, null);
        if (owner) {
            console.log(`The owner of the cat ${this.name} is ${owner.getFullName()}.`);
        } else {
            console.log(`Owner with ID ${this.ownerId} not found.`);
        }
    }
};

// Create an array of 5 people. Create two cats, both of them should have owners.
let people = [
    new Person(1, "Ivo", "Ivanovski", 30),
    new Person(2, "Stole", "Stojanovski", 25),
    new Person(3, "Petko", "Petkovsk3", 35),
    new Person(4, "Miso", "Misovski", 40),
    new Person(5, "Kire", "Kirovski", 28)
];

let cat1 = new Cat("Whiskers", 2, "Black", 1); // Owner is Ivo
let cat2 = new Cat("Fluffy", 3, "White", 3); // Owner is Petko

console.log(cat1);
console.log(cat2);

cat1.getOwnerDetails();
cat2.getOwnerDetails();

// Create PersianCat and RagDollCat constructor functions that inherit from Cat.
// #### PersianCat
// * eyeColor - string
// * furDescription - method that writes in console: The cat [name] has full fur!
function PersianCat(name, age, color, ownerId, eyeColor) {
    Cat.call(this, name, age, color, ownerId);
    this.eyeColor = eyeColor;
    this.furDescription = function() {
        console.log(`The cat ${this.name} has full fur!`);
    }
}

// Set up inheritance
Object.setPrototypeOf(PersianCat.prototype, Cat.prototype);
// Object.setPrototypeOf(PersianCat.prototype, Cat.prototype): 
// This sets the prototype of PersianCat.prototype to Cat.prototype, 
// ensuring that PersianCat correctly inherits from Cat.

// #### RagDollCat
// * weight - number
// * isFriendly - boolean
// * printPersonality(type) - method that can accepts boolean. If the boolean is true it should write that the cat is friendly and set the isFriendly value to true, else it should print that the cat is not friendly

function RagDollCat(name, age, color, ownerId, weight, isFriendly) {
    Cat.call(this, name, age, color, ownerId);
    this.weight = weight;
    this.isFriendly = isFriendly;
    this.printPersonality = function(type) {
        if (type) {
            this.isFriendly = true;
            console.log(`The cat ${this.name} is friendly.`);
        } else {
            this.isFriendly = false;
            console.log(`The cat ${this.name} is not friendly.`);
        }
    }
}

// Set up inheritance
Object.setPrototypeOf(RagDollCat.prototype, Cat.prototype);
// Object.setPrototypeOf(RagDollCat.prototype, Cat.prototype): 
// This sets the prototype of RagDollCat.prototype to Cat.prototype, 
// ensuring that RagDollCat correctly inherits from Cat.

// Create one of each cat
let persianCat = new PersianCat("Snowball", 4, "White", 2, "Blue");
let ragDollCat = new RagDollCat("Mittens", 5, "Gray", 4, 10, false); 

// Print details about the owner of the cat
persianCat.getOwnerDetails();
ragDollCat.getOwnerDetails();

// Call the furDescription and printPersonality methods correspondingly
persianCat.furDescription();
ragDollCat.printPersonality(true);


console.log(persianCat);
console.log(ragDollCat);