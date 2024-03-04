let str = "Hello! World js";
console.log(str.length); // lengh of the string
console.log(str.charAt(0)); // return H value of the index
console.log(str.substring(0, 4)); // return value from 0 to 3
console.log(str.toLowerCase()); // return str in lower case
console.log(str.toUpperCase()); // return str in Upper Case
console.log(str.indexOf("o")); // retutn index of case o
console.log(str.startsWith("h")); // return boolean
console.log(str.endsWith("d")); // return boolean
console.log(str.split(" ")); // return a list from n strings between this strings in the main string ' '
console.log(Array.from(str)); // return a list from tha all string

// slice for edit the list from to
// splice for edit the list and delete from the index n numbers, n is the second parmater
console.log(str.slice(2, 5));
console.log(Array.from(str).splice(2, 5));
