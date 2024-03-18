/* write a js program to extract
            the first half of a string of even length */

// My solution :

function halfString(str) {
  if (str.length % 2 !== 0) {
    return "str is odd";
  } else {
    return str.slice(0, str.length / 2);
  }
}
console.log(halfString('khalid MARZOUG1'))

// Bob Solution

// samething
