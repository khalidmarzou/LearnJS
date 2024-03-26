/*
    Regular Expression
    Quantifiers
        n+ => One Or more
        n* => zero Or more
        n? => zero or one
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
let nums = "0110 10 150 05120 0560 350 00"; // 0 numbers or no 0
let urls = "https://google.com http://www.website.net web.com"; // http + https

// // Let's Practice :
// console.log(mails.match(/\w@\w\w.sa/gi)); // first mail without quantifiers
// console.log(mails.match(/\w+@\w+.(com|net)/gi)); // + one word or more \w words or degits  or under score

// console.log(mails.match(/\w+@\w+.\w+/gi));

// console.log(nums.match(/0\d*0/g)); // * zero or more \d digits
console.log(urls.match(/https?/gi)); // with s or without s
console.log(urls.match(/(https?:\/\/)?(www.)?\w+.\w+/gi)); // to write // in code use \ before every char of programation
// ()? be or not
