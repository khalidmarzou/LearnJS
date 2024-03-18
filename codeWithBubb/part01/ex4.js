// Given two values, write a JavaScript program to find out which one is nearest to 100
// MySolution :
function nearestTo100(a, b) {
  if (Math.abs(100 - a) < Math.abs(100 - b)) {
    return a;
  } else {
    return b;
  }
}
console.log(nearestTo100(800, 900));

// BOB Solution : same thing just syntaxe pro :
// bob have an error if the number > 100 !!!
const closestTo100 = (a, b) => (100 - a) < (100 - b) ? a : b;
console.log(closestTo100(101,900))