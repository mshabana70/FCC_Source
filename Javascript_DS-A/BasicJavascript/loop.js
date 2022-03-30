// JAVASCRIPT LOOPS
console.log("\n/*************** JS LOOPS ***************/\n")
/*
    In programming, when it comes to tasks that 
    require certain commands or blocks of code to be
    run continously, loops are the best for that. Depending
    on if you need to run while a condition is met, or if you need
    a set amount of iterations, JavaScript has you covered with
    different loops to depending on what you need.
*/

// WHILE LOOPS
console.log("\n/*************** WHILE LOOPS ***************/\n")
/*
    While loops run blocks of code while a specified condition
    is true. As long as that condition is true, you code block will
    rerun until it is not.

    NOTE: These forms of loops are prone to issues as it is easy to
    mistakely create what is known as an "Infinite Loop." Infinite loops
    will run infinitely, because there is nothing stoping the condition
    that was specified from being true.
*/

// Example of while loops
const myArray = [];

// Fill myArray from 5 to 0 (inclusive)
var i = 5;
while (i >= 0) {
    myArray.push(i);
    i--;
}

// Return myArray
console.log(myArray); // [5, 4, 3, 2, 1, 0]


// FOR LOOPS
console.log("\n/*************** FOR LOOPS ***************/\n")

/*
    Most common type of loop in JS. The For loop is declared with three 
    optional conditions that are seperated by a semicolon.
    
    for (a; b; c) {...}

    'a' is the initialization statement, 'b' is the condition statement of 
    the initialized variable in 'a', and 'c' is the final expression (usually
    how you intend to iterate the initialized variable in 'a').

    'a' is initialized only one time before the loop is run. 'b' condition is 
    evaluated at the begining of every loop iteration. As long as the condition
    is true, it will keep running. If it is false at the beginning of the loop
    iteration, than the loop is terminated. 'c' is executed at the end of every 
    loop iteration, before the 'b' condition is checked for the next loop iteration.

*/

// Example of For loop syntax
const ourArray = [];

for (let i = 0; i < 5; i++) {
    ourArray.push(i);
}

// Return ourArray
console.log(ourArray); // [0, 1, 2, 3, 4]


// FOR LOOPS (ODD/EVEN)
console.log("\n/*************** FOR LOOPS (ODD/EVEN) ***************/\n")

/*
    For loops dont have to iterate one at a time. Simply 
    by changing the final expression in you for loop, we can
    count by even numbers or odd number, depending on what you 
    set your initialization variable to.
*/

// Example of For Loop counting even numbers
const evenArr = [];

for (let i = 0; i <= 10; i += 2) {
    evenArr.push(i);
}

// Return evenArr
console.log(`Array of even integers between 0 - 10: ${evenArr}`); // [0, 2, 4, 6, 8, 10]

// Example of For Loop counting odd numbers
const oddArr = [];

for (let j = 1; j <= 10; j += 2) {
    oddArr.push(j);
}

// Return evenArr
console.log(`Array of odd integers between 1 - 10: ${oddArr}`); // [1, 3, 5, 7, 9]


// FOR LOOPS (BACKWARDS)
console.log("\n/*************** FOR LOOPS (BACKWARDS) ***************/\n")

/*
    You can also count  backwards with for loops. Once again,
    just change how you iterate your initialization variable. Rather than
    increment, you can also decrement the variable by however many values
    you need.
*/

// Example of Backwards For Loop (even)
const backEvenArr = [];

for (let i = 10; i >= 0; i -= 2) {
    backEvenArr.push(i);
}

// Return backArr
console.log(`Array of even integers from 10 to 0: ${backEvenArr}`); // [10, 8, 6, 4, 2, 0]

// Example of Backwards For Loop (odd)
const backOddArr = [];

for (let i = 9; i >= 1; i -= 2) {
    backOddArr.push(i);
}

// Return backArr
console.log(`Array of even integers from 10 to 0: ${backOddArr}`); // [10, 8, 6, 4, 2, 0]


// FOR LOOPS (ARRAY)
console.log("\n/*************** FOR LOOPS (ARRAY) ***************/\n")

/*
    Up to this point, we have only used for loops to iterate values and push them to arrays.
    But what if we had an array of values already, and we wanted to iterate through those 
    existing values. With for loops, rather than push a value to the array, we can use integer
    values to iterate through the indexes of an array. 
*/

// Example of For loop interating through Array
const arr = [10, 9, 8, 7, 6, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

/*
    We are setting our condition based on the length of the array. This is because we dont want our
    initialized variable to exceed the value of the last index in the array (arr.length - 1).
*/

// Another example from FCC exercise
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// Return total
console.log(`Total of array values: ${total}`);


// NESTED FOR LOOPS
console.log("\n/*************** NESTED FOR LOOPS ***************/\n")

/*
    If you have array that is multi-dimensional, you can use the previous
    examples logic to loop through both the array and any sub-arrays.
*/

// Example of nested for loop
