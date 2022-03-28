// JAVASCRIPT OBJECTS 
console.log("/*********** JAVASCRIPT OBJECTS ***********/\n");

/* 
    Objects are similar to arrays, except instead of indexes to access
    and modify their data, you access the data in objects through
    what is called properties.

    Objects are helpful in storing data in a structured manner, they also
    help represent real world objects like a cat.
*/

// Cat Object
const cat = {
    "name": "Kit Kat",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
};

/*
    In the example above, the properties are stored as strings.
    You can also use numbers as properties. You also have the option
    to omit quotes for single-word string properties. Take the following
    example for instance:
*/

// Another object example
const Car = {
    make: "Ford",
    5: "five",
    "model": "focus"
};

/*
    If you object has any non-string properties, JS will 
    automatically typecast them as strings.
 */

// Dog object example:
const myDog = {
    name: "Pebbles",
    legs: 4,
    tails: 1,
    friends: ["Mahmoud", "Pupper", "Sonic"]
};


// Accessing Object Properties with Dot Notation
console.log("/*********** ACCESSING OBJECT PROPERTIES (DOT) ***********/\n");

/*
    There are two ways to access the properties of a object:
    Dot notation (.) and Bracket notation, very similar to an
    array.

    Dot notation is what is used when you know the name of the 
    property you are trying to access ahead of time.
*/

// Example of using Dot notation:

const myObj = {
    prop1: "val1",
    prop2: "val2"
};

const prop1Val = myObj.prop1; // Value: val1
const prop2Val = myObj.prop2; // Value: val2

console.log(`Accesssing the prop1 property of myObj: ${prop1Val}`);
console.log(`Accesssing the prop2 property of myObj: ${prop2Val}`);

// Another Example on dot notation:
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;


// Accessing Object Properties with Bracket Notation
console.log("/*********** ACCESSING OBJECT PROPERTIES (BRACKET) ***********/\n");

/*
    If the object you are trying to access has a space in its name,
    you will need to use bracket notation.

    You can still use bracket notation on objects with no space in
    its name as well.
*/

// Example of Object using Bracket Notation
const bracketObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
};
// Note: Property names with spaces in them must be in quotes

console.log(bracketObj["Space Name"]); // Kirk
console.log(bracketObj["More Space"]); // Spock
console.log(bracketObj["NoSpace"]);    // USS Enterprise


// Another Example of Bracket Notation
const testBracketObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

const entreeValue = testBracketObj["an entree"];
const drinkValue = testBracketObj["the drink"];

console.log(`Today's entree is ${entreeValue}`);
console.log(`Today's drinks are ${drinkValue}`);
