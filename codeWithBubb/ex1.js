function check100(a, b) {
  if (a === 100 || b === 100 || a + b === 100) {
    return true;
  } else {
    return false;
  }
}
// console.log(check100(50, 0));

// solution :
const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a + b) === 100;
console.log(isEqualTo100(80, 20));
