/* write a js program to get the largest even number from
    an array of integers. */
// My Solution :
let arr = [24, 33, 83, 28, 10, 42, 91, 86, 79, 33, 33, 97, 768, 186];

let arrEven = arr.filter((value) => value % 2 === 0);
arrEven.sort((a, b) => b - a);
console.log(arrEven[0]);

// Bubb Solution :
const largestEvent = (arr) =>
  Math.max(...arr.filter((value) => value % 2 === 0));

console.log(largestEvent(arr));
