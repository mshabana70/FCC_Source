// PROFILE LOOKUP CODE CHALLENGE

/*
    We have an array of objects representing different people in 
    our contacts lists.

    A lookUpProfile function that takes name and a property (prop) 
    as arguments has been pre-written for you.

    The function should check if name is an actual contact's firstName 
    and the given property (prop) is a property of that contact.

    If both are true, then return the "value" of that property.

    If name does not correspond to any contacts then return the string 
    No such contact.

    If prop does not correspond to any valid properties of a contact found 
    to match name then return the string No such property.
*/

// Contacts Array of Objects
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// Look up function
function lookUpProfile(name, prop) {
    // Iterate through array of objects
  for (let i = 0; i < contacts.length; i++) {
      // check if current contact first name matches name
    if (name == contacts[i].firstName) {
        // check if current contact has propert of prop
        if (contacts[i].hasOwnProperty(prop)) {
            // if so, return prop
            return contacts[i][prop];
        } else {
            // if not, return property does not exist
            return "No such property";
        }
    }
  }
  // if name did not match any objects first name property,
  // return no such contact
  return "No such contact";

}

// Sample test
console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Bob", "potato"));
console.log(lookUpProfile("Akira", "address"));