/**write a js function to find the first not repeated char
 * ex : "abaxcddbec"
 * output : "e"
 */

// My Solution :
const firstNotReapeatedChar = (str) => {
  const valueReapeted = str
    .split("")
    .filter((value, index, arr) => arr.slice(index + 1).indexOf(value) !== -1);
  return str.split("").find((value) => valueReapeted.indexOf(value) === -1);
};
console.log(firstNotReapeatedChar("abaxcddbec"));
// Bubb Solution :
const getNoReapetedChar = (str) =>
  str
    .split("")
    .filter(
      (item, index, arr) =>
        arr.filter((arrItem) => arrItem === item).length === 1
    );

console.log(getNoReapetedChar("abaxcddbec"));
