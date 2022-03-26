/* ==== Conditional Logic with If Statements ==== */

// If statements are used to make decisions in code.
// They usually help direct the flow of your code as
// your script runs.

/* Syntax of a Conditional If statement
if (condition is true) {
    statement is executed
}
*/

// Example

// Create function with conditional
function test(myCondition) {
    if (myCondition) {
        return "It was true";
    }
    return "It was false";
}

// Call function to test conditional
console.log(test(true));
console.log(test(false));


/* ==== Comparison with the Equality Operator ==== */

// There are many of Equality operators with JS that usually
// return true or false.
// This makes them great in conjunction with conditionals.

// '==' operator
function equalityTest(myVal) {
    if (myVal == 10) {
        return "Equal";
    }
    return "Not Equal";
}

// call function
console.log(equalityTest(8));
console.log(equalityTest(10));
console.log(equalityTest(5));
