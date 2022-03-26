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

func();
oopsGlobal = oopsGlobal + 5
console.log("oopsGlobal outside of function " + oopsGlobal);
