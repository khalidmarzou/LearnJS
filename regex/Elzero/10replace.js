/*
    - replace
    - replaceAll
*/

let txt = "We @ programmer Love Programming And @ Because @ is Amazing";

console.log(txt.replace("@", "javaScript")); // we can use pattern

console.log(txt.replaceAll("@", "javaScript")); // replace all if not pattern

console.log(txt.replaceAll(/@/gi, "javaScript")); // if pattern we need gi

console.log(txt.replace(/@/gi, "javaScript")); // if we use g we replace all
