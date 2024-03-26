/*
    Regular Expression
    Quantifiers
    $ => End With Something
    ^ => Start With Something
    ?= => Followed by something
    ?! => Not followed with something
*/

let myString = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/gi.test(myString)); // true myString end with ing
console.log(/lz$/gi.test(names)); // true
console.log(/^we/gi.test(myString));
console.log(/^\d/gi.test(names)); //true

console.log(names.match(/\d\w{5}(?=Z)/gi)); // names with 5 words and start with digit and folowed by Z
console.log(names.match(/\d\w{8}(?!Z)/gi)); // names with 8 words and not followed with Z
