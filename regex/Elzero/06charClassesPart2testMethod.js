/*
    Regular Expression
    Char Classes
        \b => matches at the begining or end of a word.
        \B => matches not at the begining or end of a word.


    test Method :
        pattern.test(input) // return true or false
*/

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let test = "spam spam spam";
let re = /spam/gi;
// console.log(names.match(re));
// console.log(names.match(/\bspam/gi)); // begining
// console.log(names.match(/spam\b/gi)); // end
// console.log(names.match(/(\bspam|spam\b)/gi)); // begining and end
// console.log(test.match(/(\Bspam | spam\B)/gi));

console.log(/(\bspam|spam\b)/gi.test("1Spam")); // true
console.log(/(\bspam|spam\b)/gi.test("Spam2")); // true
