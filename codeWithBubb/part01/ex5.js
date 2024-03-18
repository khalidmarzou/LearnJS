// Write a JavaScript program to check a given string
// contains 2 to 4 occurrences of a specified character.

// function checkString(str, checkedStr) {
//   let count = 0;
//   let occChecked = "";
//   for (let x of str) {
//     if (x !== occChecked) {
//       for (let y of checkedStr) {
//         if (x === y) {
//           occChecked = x;
//           count++;
//           break;
//         }
//       }
//     }
//   }
//   if (count >= 2 && count <= 4) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkString("khalid", "boucra"));

//Bob Solution :

const countChars = (str, char) =>
  str.split("").filter((ch) => ch === char).length;

const contains2To4 = (str, char) =>
  countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(contains2To4("KHALID", "I"));

// split return array from string ; filter return new array in condition
// if without instruction return true or false
