// search return index of the element in regeX
// String.search(pattern here)
const pattern = /\s/gi;
const str = "kh KH kh";
console.log(str.match(pattern));
console.log(str.split(" "));

const pswrdPattern = /[A-Z]/g;
console.log(str.replace(/kh/g, "zz"));

const practice = "DD105 TEST DD106 KHALID MARZOUG DD105";
const pattttern = /(DD)(\d{3})/gi;
console.log(practice.replace(pattttern, "$1 --1er annee $2"));

// (group) (group) ==> $1 $2 ==> $ = group

console.log(pswrdPattern.exec("KHALID"));
