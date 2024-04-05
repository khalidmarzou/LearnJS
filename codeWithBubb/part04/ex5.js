/**write a js function that returns true if the provided
 * predicate function returns true for all elements in a collection,
 * false otherwise.
 */

// My Solution :
function isEveryItem(arr, fn) {
  return arr.every((value) => fn(value));
}
console.log(isEveryItem([4, 5, 6, 7, 9], (x) => typeof x === "number"));
// Bubb Solution :
const isEveryElem = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i])) {
      return false;
    }
  }
  return true;
};
console.log(isEveryElem([4, 5, 6, 7, 9], (x) => typeof x === "number"));
