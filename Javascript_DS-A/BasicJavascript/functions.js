/* ==== Global Scope and Functions ==== */

// Scope refers to the visibility of variables.
// Variables defined outside of a function block have GLOBAL scope
// This means they can be seen everywhere you JS code.

// NOTE: Variables created with 'let' and 'const' keyword
// are automatically created in the global scope.
// This can cause unintended variable conflicts within your code.
// Its best practice to always use 'let' and 'const' keywords when
// declaring your variables.

// example of global variables using variables and functions
let myGlobal = 10;

function func() {
    oopsGlobal = 5;
    console.log("Variable in function: " + oopsGlobal);
}

// even outside of function, we can still manipulate oopsGlobal
func();
oopsGlobal = oopsGlobal + 5
console.log("oopsGlobal outside of function " + oopsGlobal);


/* ==== Local Scope and Functions ==== */

// Variables declared within a function, as well as function parameters
// have a LOCAL scope.
// This means they are only visible within the function.


// Example of local scope
function localTest() {
    let foobar = "foo";
    console.log(foobar);
}

// Call function
localTest();

// Try to access local variable outside of function
//console.log(foobar); // this returns a ReferenceError


/* ==== Global vs. Local Scope in Functions ==== */

// It is possible to local AND global variables with
// the same name.
// When this is done, the local variable hold precedence
// over the global variable.

// example of global vs. local
const someVar = "Hat";

function myFun() {
    const someVar = "Head";
    return someVar;
}

// Call function and see which scope will return
console.log("Local variable will return instead of global: " + myFun()); // this will return "Head"


/* ==== Global vs. Local Scope in Functions ==== */

// Function that executes code but does not have a 'return'
// keyword will return and 'undefined' value.

// Example
let sum = 0;

function addSum(num) {
  sum = sum + num;
}

console.log(addSum(3)); // undefined


/* ==== Global vs. Local Scope in Functions ==== */

// You can also assign a function output to a variable using 
// a 'return' keyword in a function.

// Example
function sumInt(a, b) {
    return a + b;
}

// Assign Function to variable
const twoAndFive = sumInt(2, 5);

// Print variable to see what function assigned to variable
console.log(twoAndFive);

/* ==== Data Types in Functions ==== */

// CODING CHALLENGE: Stand in Line. (QUEUE)
// Write a function takes in an array parameter and a number 
// parameter.
// The Function adds the number parameter in the last index of the
// passed array, and removes the first index of the array. The removed
// index is retured.

function nextInLine(arr, item) {
    arr.push(item);
    var removedIndex = arr.shift();
    return removedIndex;
}

// Create a test array
const testArray = [1, 2, 3, 4, 5];

// Display code
console.log("Array before: " + JSON.stringify(testArray));
console.log("Removed index: " + nextInLine(testArray, 6));
console.log("Array after: " + JSON.stringify(testArray));

// BOOLEAN VALUES
// Booleans represent true and false, on and off, right and wrong,
// 0 and 1.

