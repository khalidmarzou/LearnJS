/* write a js program to replace every string character in a given
string with the character followin it in the alphabet */
//Solution :
// function moveCharsForward(str) {
//   let strMovedChars = "";
//   str.split("").map((value, index, array) => {
//     strMovedChars += String.fromCharCode(value.charCodeAt() + 1);
//   });
//   return strMovedChars;
// }
// console.log(moveCharsForward("ABCD"));

function moveCharsForward(str) {
  return str
    .split("")
    .map((value, index, array) => {
      return String.fromCharCode(value.charCodeAt() + 1);
    })
    .join(""); // join can transfer an aray to string
}
console.log(moveCharsForward("ABCD"));
