/** write a js prog 2 compare 2 objects 2 determine if the 1st
 * one contains the same propreties as the second one (which may
 * also have additional properties)
 */

// My Solution :
const objA = { a: 1, b: 1, c: 1 };
const objB = { a: 3, b: 3, c: 3 };
const objC = { a: 2, b: 2, d: 2 };

const objEqual = (a, b) => {
  let aKeys = Object.keys(a);
  let bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false;
  }
  for (let x in aKeys) {
    if (aKeys[x] !== bKeys[x]) {
      return false;
    }
  }
  return true;
};
console.log(objEqual(objA, objB));

// Bub Solution :
const objectsKeysEqual = (a, b) => Object.keys(a).every((key) => b[key]); // check if b[key] not undefined
console.log(objectsKeysEqual(objA, objB));
