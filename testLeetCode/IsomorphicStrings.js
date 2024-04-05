/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const x = [];
  if (s.length === t.length) {
    const ss = s.split("").filter((char) => {
      if (!x.includes(char)) {
        x.push(char);
        return char;
      }
    });
    x.splice(0, x.length);
    const tt = t.split("").filter((char) => {
      if (!x.includes(char)) {
        x.push(char);
        return char;
      }
    });
    return ss.length === tt.length;
  }
  return false;
};
console.log(isIsomorphic("egg", "add"));
