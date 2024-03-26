/*
    Regular Expression
    Character Classes
        . => matches any character, except newline or other line terminators.
        \w => matches word chars. [a-z, A-Z, 0-9, And Underscore (_)]
        \W => matches Non word chars.
        \d => matches digits from 0 to 9.
        \D => matches non digit chars.
        \s => matchess whitespace chars.
        \S => matches non whitespace chars.
*/

let email =
  "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org o@s.org 1@1.com";

// console.log(email.match(/./g)); // return all chars
// console.log(email.match(/\w/g));
// console.log(email.match(/\W/g));
// ... ↗️

let validEmail = /\w@\w.(com|net)/g;
console.log(email.match(validEmail));
