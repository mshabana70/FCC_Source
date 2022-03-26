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
test(true);
test(false);