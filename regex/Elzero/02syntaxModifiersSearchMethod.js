/*
-------------Syntax
/pattern/modifier(s);
new RegExp("pattern","modifier(s)")
*/
// Modifiers (Flags):
/*
i => case-insensitive
g => global : all results
m => Multilines

// NB : we can use more than one flag
*/
/*
--------------------Search Methods
    match(pattern)
*/

/*
--------Match :
            Matches a string against a regular expression pattern
            returns an array with the matches
            return null if no match is found
*/

let myString = "Hello Elzero Web School I Love elzero";

let regex = /Elzero/; // pattern
console.log(myString.match(regex));
/*
[
  'Elzero', // pattern
  index: 6, // index of E
  input: 'Hello Elzero Web School I Love elzero', // String
  groups: undefined
]
*/

console.log(myString.match(/elzero/i)); // first one with case insensitive
console.log(myString.match(/elzero/gi)); // return list with all cases
console.log(myString.match(/elzerooooo/gi)); // null

