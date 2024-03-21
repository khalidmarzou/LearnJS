/*  Write a js function that returns a passed string with
    letters in alphabetical order .
    Example string : 'webmaster'
    Expected Output : "abeemrstw" */

// My Solution :
const strInAlphabeticalOrder = (str) => str.split("").sort().join("");
console.log(strInAlphabeticalOrder("webmaster"));
// Bubb Solution :
// sameThing
