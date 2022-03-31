// USE RECURSION TO CREATE A COUNTDOWN
console.log("\n/********** COUNTUP USING RECURSION **********/\n");
/*
    In a previous challenge, you learned how to use recursion to replace 
    a for loop. Now, let's look at a more complex function that returns 
    an array of consecutive integers starting with 1 through the number 
    passed to the function.

    As mentioned in the previous challenge, there will be a base case. 
    The base case tells the recursive function when it no longer needs 
    to call itself. It is a simple case where the return value is already 
    known. There will also be a recursive call which executes the original 
    function with different arguments. If the function is written correctly, 
    eventually the base case will be reached.

    For example, say you want to write a recursive function that returns 
    an array containing the numbers 1 through n. This function will need 
    to accept an argument, n, representing the final number. Then it will 
    need to call itself with progressively smaller values of n until it 
    reaches 1. You could write the function as follows:
*/

function countUp(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countUp(n - 1);
        countArray.push(n);
        return countArray;
    }
}

// Test recursive function
console.log(countUp(5));


// COUNTDOWN
console.log("\n/********** COUNTDOWN USING RECURSION **********/\n");

/*
    At first, this seems counterintuitive since the value of n decreases, 
    but the values in the final array are increasing. This happens because 
    the push happens last, after the recursive call has returned. At the 
    point where n is pushed into the array, countup(n - 1) has already been 
    evaluated and returned [1, 2, ..., n - 1].

    CHALLENGE:

    We have defined a function called countdown with one parameter (n). The 
    function should use recursion to return an array containing the integers 
    n through 1 based on the n parameter. If the function is called with a 
    number less than 1, the function should return an empty array. For example, 
    calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. 
    Your function must use recursion by calling itself and must not use loops 
    of any kind.
*/

function countdown(n){
    if (n < 1) {
        return [];
    }
    const countDownArr = countdown(n - 1);
    countDownArr.unshift(n);
    return countDownArr;
}

console.log(countdown(5));