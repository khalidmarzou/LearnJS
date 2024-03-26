const myString = "jAfFdlkHGsS1j546Cf!Vl?BkB#c9dkls";
// Practice :
// console.log(myString.match(/[a-z]/g)); // alphabitic from a to z
// console.log(myString.match(/[^a-z]/g)); // not a to z
// console.log(myString.match(/[A-Z]/g));
// console.log(myString.match(/[^A-Z]/g));
// console.log(myString.match(/[abc]/gi));
// console.log(myString.match(/[a-zA-Z]/g)); //sameTHing
// console.log(myString.match(/[^a-zA-Z]/g));
// console.log(myString.match(/[^a-z]/gi)); // sameTHing
console.log(myString.match(/[^a-z0-9]/gi)); // not numbers not from a A to z Z
console.log(myString.match(/[^a-z^A-Z^0-9]/gi));