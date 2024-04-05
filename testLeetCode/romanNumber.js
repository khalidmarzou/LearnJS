/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const symbol = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    const arr = [];
    for (let i = 0; i < s.length; i++) {
      if (symbol[s[i]] < symbol[s[i + 1]]) {
        arr.push(symbol[s[i + 1]] - symbol[s[i]]);
        i++
      }else{
          arr.push(symbol[s[i]])
      }
    }
    return arr.reduce((item, acc) => item + acc, 0);
  };

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

console.log(romanToInt("MCMXCIV")); // 1994
