// JAVASCRIPT ARRAYS
/**
 * With Array variables, you can store multiple
 * pieces of data in one place.
 */

/* ==== One Dimensional Arrays ==== */


// All arrays are declared with an open and closing square bracket
const sandwich = ["Peanut Butter", "Jelly", "Bread"];

// Lets see whats inside this array using indexes
console.log("To make a sandwich you need " + sandwich[0] + ", " + sandwich[1] + ", and " + sandwich[2]);

// You can reassign the values of these indexes within an array (even if the array is declared as const)
sandwich[1] = "Nutella";

// Lets see the new value of the index
console.log(sandwich[1]);


/* ==== Multi Dimensional Arrays ==== */

// You can also nest an array within and array
// This is known as MULTI-DIMENSIONAL ARRAY
const teams = [["Bulls", 23, ["coach", "I forgot"]], ["Nets", 7]];

// Lets see what is inside this array
console.log("Favorite teams: " + "\n" + teams[0] + "\n" + teams[1]);

// When accessing multi-dimensional arrays, its best
// to think of it as an array of arrays.

// First bracket returns the first level of arrays
console.log("First array level: " + teams[0]);

// Second bracket returns the second level of arrays
console.log("Second array level: " + teams[0][1]);

// Third bracket returns the third level of arrays
console.log("Third array level: " + teams[0][2][0]);


/* ==== Array Methods ==== */

// Array push() method: append data easily to the end of an array
const arr1 = new Array(1, 2, 3);
arr1.push(4);
console.log(arr1);

// Array push() method: multi-dimensional array
const arr2 = [["Mahmoud", 1], ["Shabana", 2]];
arr2.push(["Elsayed", 3]);
console.log(arr2);

// Array pop() method: remove last index of an array
const popArray = [1, 4, 6];
const lastIndex = popArray.pop();
console.log("Last index of " + popArray + " WAS " + lastIndex);
// important to remember that once you pop the array 
// its last index is removed.

// Array pop() method: second example
const popArray2 = [["Mahmoud", 1], ["El-Sayed", 2], ["Shabana", 3]];
const lastName = popArray2.pop();
console.log("The last name from our array is: " + lastName);