/**Write a js function that accepts a string as a parameter and
 * counts the number of vowels within the string
 */

// My Solution :
const vowels = "aeiou".split("");

const countVowels = (str) => {
  str = str.split("");
  let count = 0;
  str.forEach((element) => {
    for (let x of vowels) {
      element === x ? count++ : null;
    }
  });
  return count;
};
console.log(countVowels("khaliiiid"));

// Bubb Solution :
const countLetters = (str, letters = vowels) =>
  str.split("").filter((s) => letters.indexOf(s) > -1).length;
console.log(countLetters("khaliiiid"));
console.log(countLetters("khaliiiid", ["i"]));
