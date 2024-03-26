/*
    - replace
    - replaceAll
*/

let txt = "We Love Programming And @ Because @ is Amazing";

// console.log(txt.replace("@", "javaScript")); // we can use pattern
// console.log(txt.replaceAll("@", "javaScript"));

console.log(txt.replaceAll(/@/gi, "javaScript")); // Like THis , that's amazing
