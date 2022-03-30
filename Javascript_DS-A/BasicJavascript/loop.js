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

