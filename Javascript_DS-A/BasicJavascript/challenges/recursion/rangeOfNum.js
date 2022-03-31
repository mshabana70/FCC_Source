// USE RECURSION TO CREATE A RANGE OF NUMBERS
console.log("\n/********** RANGE OF NUM USING RECURSION **********/\n");
/* 
    We have defined a function named rangeOfNumbers with two parameters. 
    The function should return an array of integers which begins with a 
    number represented by the startNum parameter and ends with a number 
    represented by the endNum parameter. The starting number will always 
    be less than or equal to the ending number. Your function must use 
    recursion by calling itself and not use loops of any kind. It should 
    also work for cases where both startNum and endNum are the same.
*/

function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [startNum];
    }
    const rangeOfNum = rangeOfNumbers(startNum, endNum - 1);
    rangeOfNum.push(endNum);
    return rangeOfNum;
};

console.log(rangeOfNumbers(5, 10));
console.log(rangeOfNumbers(10, 30));
console.log(rangeOfNumbers(0, 2));
console.log(rangeOfNumbers(5, 5));