/** write a js prog to replace the first digit in a string
 *  (should contains at least digit) with $ character
 */

// My Solution :
const replaceFirstDigitWith$ = (str) => {
  let strArr = str.split("");
  let index = strArr.findIndex((value) => !isNaN(Number(value)));
  strArr[index] = "$";
  str = strArr.join("");
  return str;
};
console.log(replaceFirstDigitWith$("kh9ali4546dfsd6"));
// Bubb Solution :
const replaceFirstDigit = (str) => str.replace(/[0-9]/, "$");
console.log(replaceFirstDigit("khali412lid"));
