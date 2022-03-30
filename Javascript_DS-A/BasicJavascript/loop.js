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