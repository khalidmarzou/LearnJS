/*
    Regular Expression
        -- Challenge
*/

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";
let url6 = "https://www.youtube.com/watch?v=_n_oiZRqH_k";
let url7 = "https://ar.savefrom.net/246/";
let url8 = "https://chat.openai.com/";
let url9 = "https://github.com/MMSO-DD105/MMSO_Projects";
let url10 =
  "https://www.google.com/search?q=long+link+in+internet&oq=long+link+in+internet&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQLhhA0gEINzQzOGowajGoAgiwAgE&sourceid=chrome&ie=UTF-8";

let re = /(https?:\/\/)?([a-z]{2,6}\.)?\w+\.\w{2,9}(:\d{4})?\/?(.+)?/gi;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
console.log(url6.match(re));
console.log(url7.match(re));
console.log(url8.match(re));
console.log(url9.match(re));
console.log(url10.match(re));

// NB : to write . u must use \. and just . mean matches any character
