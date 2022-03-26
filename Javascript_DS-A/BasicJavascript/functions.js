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