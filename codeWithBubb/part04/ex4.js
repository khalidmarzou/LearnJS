/**Write a js prog to generate a random hexadecimal color code. */

// My Solution :
function getRandomHexadecimalColor() {
  const af = ["A", "B", "C", "D", "E", "F"];
  for (let i = 0; i < 10; i++) {
    af.push(i);
  }
  const index = (arr) => Math.floor(Math.random() * arr.length);
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += af[index(af)];
  }
  return color;
}
console.log(getRandomHexadecimalColor());

// Bubb Solution :
const getRandomHexNumber = () => {
  return Math.floor(Math.random() * 16).toString(16);
};
const getRandomHexColor = () =>
  "#" + Array.from({ length: 6 }).map(getRandomHexNumber).join("");
console.log(getRandomHexColor());