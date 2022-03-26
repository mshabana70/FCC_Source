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
console.log("\n/*********** EQUALITY ***********/\n");
// '==' EQUALITY operator

function equalityTest(myVal) {
    if (myVal == 10) {
        return "Equal";
    }
    return "Not Equal";
}

// call function
console.log(equalityTest(8));
console.log(equalityTest(10));
console.log(equalityTest('10')); // This will pass 

// Important to note that '==' with return true even if 
// the data types of values being compared are not equal.
// This operator actually attempts to convert both values 
// into a common data type to compare.

// '===' STRICT EQUALITY operator
console.log("\n/*********** STRICT EQUALITY ***********/\n");
// The counterpart of the '==' operator. This operator does
// not perform a type conversion.

function strictEqualityTest(myVal) {
    if (myVal === 10) {
        return "Equal";
    }
    return "Not Equal";
}

// call function
console.log(equalityTest(8));
console.log(equalityTest(10));
console.log(equalityTest('10')); // This will not pass

// '!=' INEQUALITY operator
console.log("\n/*********** INEQUALITY ***********/\n");
// The inequality operator is the opposite to the equality 
// operator. It mean NOT equal.

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

// Call Function
console.log(testNotEqual(10));
console.log(testNotEqual('10'));
console.log(testNotEqual(99));
console.log(testNotEqual('99'));

// '!==' STRICT INEQUALITY operator
console.log("\n/*********** STRICT INEQUALITY ***********/\n");
// Once again the logical opposite of the strict equality 
// operator (===).

function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}

// Call function 
console.log(testStrictNotEqual(10));
console.log(testStrictNotEqual(17));
console.log(testStrictNotEqual('17'));


/* ==== Conditional Logic with If Else Statements ==== */
console.log("\n/*********** If Else Statements ***********/\n");
// Now, if the condition is false, any code within the else 
// code block will execute.

// If Else statement
function testElse(val) {
    let result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or smaller";
    }

    return result;
}

console.log(testElse(4));
console.log(testElse(10));


/* ==== Conditional Logic with If Else Statements ==== */
console.log("\n/*********** Else If Statements ***********/\n");
// If you have multiple conditions that need to be addressed,
// you can chain if statements together with else if 
// statements.

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
      return "Between 5 and 10";
  }
}

console.log(testElseIf(7));
console.log(testElseIf(10));


/* ==== Logical order in If Else Statements ==== */

// It is important to remember that If, else if statements
// are executed top to bottom so the order you place your 
// conditional logic is important.

// Example: compare function logic
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}

