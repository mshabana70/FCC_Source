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
console.log("\n/*********** ACCESSING OBJECT PROPERTIES (BRACKET) ***********/\n");

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


// Accessing Object Properties with Variables
console.log("\n/*********** ACCESSING OBJECT PROPERTIES (VARIABLES) ***********/\n");

/*
    You can also use bracket notation to access properties on an 
    object using a variable. The value of this variable has to match 
    that of the name of the property.

    This can be useful for iterating through an object's properties or 
    when accessing a lookup table.
*/

// Example of Variables to access Object Properties
const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
};

const dogName = "Hunter";
const myBreed = dogs[dogName];
console.log(myBreed);


/*
    Another way you can use this concept is when the 
    property's name is collected dynamically during the
    program execution, as follows:
*/

// Dynamic Example:
const someObj = {
    propName: "John"
};

function propPrefix(str) {
    const s = "prop";
    return s + str;
}

const someProp = propPrefix("Name");
console.log(someObj[someProp]);

/*
    Note: We do not use quotes around the variable name 
    when using it to access the property because we are
    using the value of the variable, not the name.
*/

// Another example of using variables in bracket notation
const testVarObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

const playerNumber = 16;
const player = testVarObj[playerNumber];
console.log(`One of the greatest QBs in 49ers history is Joe ${player}`);


// Update Object Properties
console.log("\n/*********** UPDATING OBJECT PROPERTIES ***********/\n");

/*
    You can update a JavaScript Object's properties at any time,
    just like you would update a variable. You can use either Dot
    or Bracket notation to update an object.
*/

// Example Object
const myParrot = {
    "name": "Skipper",
    "legs": 2,
    "tails": 1,
    "Friends": ["The Neighbors", "Kowalski", "Our dog Camper"]
};

// Update our Parrots name
myParrot.name = "Happy Skipper";
myParrot["Friends"].push("Our Cat Kitty");

console.log(myParrot["name"]);
console.log(myParrot.Friends);


// Add Object Properties
console.log("\n/*********** ADDING OBJECT PROPERTIES ***********/\n");

/*
    You can add properties to existing JavaScript objects the same way 
    you would modify them.
*/

// Example of adding a property (dot notation)
myParrot.wings = true;
console.log(myParrot.wings);

// Example of adding a property (Bracket notation)
myParrot["color"] = "Rainbow";
console.log(myParrot["color"]);


// Add Object Properties
console.log("\n/*********** DELETING OBJECT PROPERTIES ***********/\n");

/*
    You can also delete properties from an object using the 
    'delete' keyword, followed by the property you wish to delete. 
*/

// Example of deleting a property
const ourTV = {
    "brand": "Samsung",
    "size": 42,
    "type": "Smart",
    "internet": true,
    "resolution": 1080
};

console.log(ourTV.type); // Smart
delete ourTV.type;
console.log(ourTV.type); // undefined


// Using Objects for Lookups
console.log("\n/*********** USING OBJECTS FOR LOOKUPS ***********/\n");

/*
    Objects can be thought of as a key/value storage data structure,
    similar to a dictionary. If you have tabular data, you can use 
    an object to lookup values rather than a switch statement or an
    if/else chain. This is very useful when you know that you is 
    limited to a certain range of values.
*/

// Example of objects with tabular data

const alphabet = {
    1: "Z",
    2: "Y",
    3: "X",
    4: "W",
    5: "etc",
    24: "C",
    25: "B",
    26: "A"
};

console.log(alphabet[1]);
console.log(alphabet[2]);

const val = 24;
console.log(alphabet[val]);

// Another example of using objects for lookups

function phoneticLookup(val) {
  let result = "";

  /* 
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }
  */

  // Instead of switch case, use object
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };

  result = lookup[val];

  // Only change code above this line
  return result;
}

console.log(phoneticLookup("charlie"));
console.log(phoneticLookup("bravo"));
console.log(phoneticLookup("echo"));


// Testing Objects for Properties
console.log("\n/*********** TESTING OBJECTS FOR PROPERTIES ***********/\n");

/*
    Sometimes it is useful to check if the property of a 
    given object exists or not. We can use the 
    .hasOwnProperty(propname) method of object to determine if 
    that object have the given property name. .hasOwnProperty() 
    returns true or false if the property is found or not.
*/

// Example of Testing Object Properties
const testingObject = {
    top: "hat",
    bottom: "pants"
};

console.log(testingObject.hasOwnProperty("top")); // true
console.log(testingObject.hasOwnProperty("middle")); // false


// Another example of testing object property
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

console.log(checkObj(testingObject, "top"));
console.log(checkObj(testingObject, "Middle"));


// Manipulating Complex Objects 
console.log("\n/*********** TESTING OBJECTS FOR PROPERTIES ***********/\n");

/*
    There will be times where you would want to store data is a 
    flexible data structure. A JavaScript object is one way to handle flexible
    data. They allow for arbitrary combinations of strings, numbers, booleans, arrays,
    functions, and objects.
*/

// Example of a complex object 
const ourMusic = [
    {
        "artist": "Daft Punk",
        "title": "Homework",
        "release_year": 1997,
        "formats": [
            "CD",
            "Cassette",
            "LP"
        ],
        "gold": true
    }
];

/*
    The example above is actually  not an object but an array. The array contains
    one object inside (the {}). The object has various pieces of metadata about an 
    album. It also has a nested array ("formats"). If you want to add more records,
    you can do this by adding the top level array "ourMusic". So essentially, "ourMusic"
    is an array of objects. 

    Note: This is how JavaScript Object Notation (or JSON) is written in this format. 
    But it is not assigned to a variable, rather just a page of objects in an array format.
*/

// Return object array 
console.log(ourMusic);


// Accessing Nested Objects 
console.log("\n/*********** ACCESSING NESTING OBJECTS ***********/\n");

/*
    The sub properties of a complex object can be accessed by chaining together
    the dot or bracket notation.
*/

// Example of Complext Object with Nested Properties
const ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet": {
        "top drawer": {
            "folder1": "a file",
            "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
};

// accessing nested objects and their properties
console.log(ourStorage.cabinet["top drawer"]); // { folder1: a file, folder2: secrets}
console.log(ourStorage.desk.drawer); // stapler


// Another example of accessing nested objects and their properties
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

// Accessing nested objects and their properties
const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents); // maps


// Accessing Nested Arrays
console.log("\n/*********** ACCESSING NESTING ARRAYS ***********/\n");

/*
    We know from previous examples that objects can contain nested objects and 
    nested arrays. Similar to how we accessed nested objects, we can chain bracket 
    notation for access to nested arrays.
*/

// An example array of nested objects and arrays
const ourPets = [
    {
        animalType: "cat",
        names: [
            "Meowzer",
            "Fluffy",
            "Kit-Cat"
        ]
    },
    {
        animalType: "dog",
        names: [
            "Spot",
            "Bowser",
            "Frankie"
        ]
    }
];

// Accessing nested arrays within the ourPet array of objects
console.log(ourPets[0].names[1]); // Fluffy
console.log(ourPets[1].names[2]); // Frankie
console.log(`Our ${ourPets[1].animalType}'s name is ${ourPets[1].names[0]}`);