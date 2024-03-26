/** Write a js function to extract unique characters from a string. */
//Solution :
const extractUniqueChar = (str) =>
  str
    .split("")
    .filter((item, index, arr) => arr.slice(index + 1).indexOf(item) === -1);

console.log(extractUniqueChar("aaabcbcc"));

const getUniqueChars = (str) => [...new Set(str.split(""))];
console.log(getUniqueChars("aaabcbcc"));
