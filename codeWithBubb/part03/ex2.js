/* write a js program to find the number of even values
    up to a given number */

// My Solution :
const evenNums = (arr) => arr.filter((item) => item % 2 === 0);
const upToX = (arr, x) => arr.filter((item) => item > x);

console.log(upToX(evenNums([1, 2, 9, 8, 100, 22, 44, 30, 5, 15]), 20));

// BOB Solution :
