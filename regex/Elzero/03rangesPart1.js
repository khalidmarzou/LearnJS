let tld = "Com Net Org Info Code Io";

let tldReg = /(org|info|io)/i; // i case insensitive org or info or io first found return it
console.log(tld.match(tldReg)); // arr in one value org index 8 index of o
console.log(tld.match(/(org|info|io)/gi)); // return all global

// let nums = "12345678910";

// console.log(nums.match(/[0-2]/g)); // return all numbers in the range
// console.log(nums.match(/[^0-2]/g)); // ^ not return all numbers except the range

// let specialNums = "1:2!!34567%%89?10";
// // i want all special chars without numbers :
// // mY sOLUTION /
// console.log(specialNums.match(/[^0-9]/g));

// // Practice :
// let practice = "Os1 Os1Os Os2 Os8 Os8Os";
// // return all words that have Os + number from 5 to 9 + Os
// // My Solution :
// console.log(practice.match(/Os[5-9]Os/g));
