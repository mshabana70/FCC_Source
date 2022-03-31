// JAVASCRIPT RECURSION

/*
    Recursion is the concept that a function can be expressed in terms of 
    itself. Lets break down what this means by creating and example of 
    multiplying the first 'n' elements of an array to create a product of 
    those elements using a for loop:
*/
console.log("\n/********** USING FOR LOOP **********/\n");

function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
}

// notice that 
// multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]?
// Lets test this
let arr = [1, 2, 3, 4];
let n = 3;
console.log(multiply(arr, 3)); // 6
console.log(multiply(arr, n - 1) * arr[n - 1]); // 2 * 3 = 6


console.log("\n/********** USING RECURSION **********/\n");

/* 
    Now that we know they are equal, lets try to rewrite our function 
    where we no longer need a loop.
*/  

function multiplyRecursion(arr, n) {
    if (n <= 0) {
        // base case is important, it must break the recursion cycle
        return 1;
    } else {
        return multiplyRecursion(arr, n - 1) * arr[n - 1];
    }
}

console.log(multiplyRecursion(arr, n)); // 6

// ANOTHER RECURSION EXAMPLE
let array = [1, 2, 4, 5, 7, 9, 12];
let k = 5;

function sumLoop(arr, n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    return sum;
}


function sumRecursion(arr, n) {
    if (n <= 0) {
        return 0; // This must be zero because it is added on to the final sum
    } else {
        return sumRecursion(arr, n - 1) + arr[n - 1];
    }
}

console.log(`With the array: \n${array}\nThe sum of the first ${k} values are ${sumLoop(array, k)} using a for loop and ${sumRecursion(array, k)} using recursion.`);