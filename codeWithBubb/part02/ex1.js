/* write a js program to create a new String from a given
    string taking the first 3 chars and the last 3 of string
    and adding them together. The string lenght must be 3
    or more, if not, the original string is returned.*/

// my solution :

function newStr(str) {
  if (str.length < 3) {
    return str;
  } else {
    let firstStr = str.substring(0, 3);
    let lastStr = str.substring(str.length - 3, str.length);
    return console.log(firstStr + lastStr);
  }
}

newStr("abc0000000000000000000def");

// Bob solution :

const makeNewString = (str) =>
  str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

    // Both slice() and substring() are used to extract parts of strings or arrays.
    // slice() is used with arrays and strings, offering more flexibility and consistent behavior across different data types.
    // substring() is specifically used with strings and offers simpler behavior, but it's less flexible and doesn't support negative indices.
    // For arrays, you'll always use slice(), while for strings, you can use either, but slice() is generally preferred due to its more versatile nature.


    console.log(makeNewString("abccdddd"));
