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
console.log("\n/*********** Logic Order of If Else Statements ***********/\n");
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

// call functions 
console.log(foo(0));
console.log(bar(0));

/* ==== Conditionals with Switch Case statements ==== */
console.log("\n/*********** Switch Case Statements ***********/\n");
// If you have many options to choose from, it might be
// best to use a switch case statement. A switch statement
// tests a value and can have many case statements which
// define various possible values. Statements are executed
// from the first matched case value until a break is encountered.

// Example: switch case statement
let lowercaseLetter = "b";

switch (lowercaseLetter) {
    case "a":
        console.log("A");
        break;
    case "b":
        console.log("B");
        break;
}

// Case values are tested with strict equality (===)

// Real example: caseInSwitch function

function caseInSwitch(val) {
    let answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }

    return answer;
}

// Test function
console.log(caseInSwitch("1"));
console.log(caseInSwitch("3"));
console.log(caseInSwitch("4"));

// Default Switch

// When you cant specify all values for you case statements
// you will need to use the Default case. Here you can default
// to a code block when no cases are bet in the switch case 
// statement.

// example:

function switchOfStuff(val) {
    let answer1 = "";

    switch (val) {
        case "a":
            answer1 = "apple";
            break;
        case "b":
            answer1 = "bird";
            break;
        case "c":
            answer1 = "cat";
            break;
        default:
            answer1 = "stuff";
            break;
    }

    return answer1;
}

// Test function
console.log(switchOfStuff("a"));
console.log(switchOfStuff("c"));
console.log(switchOfStuff("e")); // Should return "stuff"

// Multiple inputs with same output

// If you have multiple cases that can return the same output
// you can write your switch statement as follows.

function sequentialSizes(val) {
    let answer = "";

    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
        
    }

    return answer;
}

// Test function
console.log(sequentialSizes(1));
console.log(sequentialSizes(2));
console.log(sequentialSizes(7));
console.log(sequentialSizes(4));
console.log(sequentialSizes(9));


// TERNARY OPERATOR
console.log("\n/*********** TERNARY OPERATOR ***********/\n");

/*
    Also known as the conditional operator, is a javascript syntax that
    creates one line if-else expressions. The syntax is as follows:

    a ? b : c

    'a' is the condition of the if-else statement. 'b' is the code to run
    when the condition ('a') is true, and c is the code to run when the 
    condition ('a') returns false.
*/

// Example of a traditional if statement
function findGreater(a, b) {
    if (a > b) {
        return "a is greater";
    } else {
        return "b is greater or equal";
    }
}

function findGreaterTernary(a, b) {
    return a > b ? "a is greater" : "b is greater or equal";
}

// Another example 

function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal";
}


// TERNARY OPERATOR (MULTIPLE CONDITIONS)
console.log("\n/*********** TERNARY OPERATOR (MULTIPLE) ***********/\n");

/*
    What if you need an alternative to if else if expression?
*/

// Example of chained if statement
function findGreaterOrEqual(a, b) {
    if (a === b) {
        return "a and b are equal";
    } else if (a > b) {
        return "a is greater";
    } else {
        return "b is greater";
    }
}

function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal"
            : (a > b) ? "a is greater"
            : "b is greater";
} // is this considered best practice^^^

// Another example

function checkSign(num) {
    return (num === 0) ? "zero"
            : (num > 0) ? "positive"
            : "negative";
}

