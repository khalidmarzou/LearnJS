const fileName = "test.json";
function checkExtension(name) {
  let indexDot = name.lastIndexOf("."); // return index of the last one
  let extension = name.slice(indexDot, name.lenght); // return a new string from the range
  return extension;
}
// console.log(checkExtension(fileName));
// console.log(checkExtension("test.khalid..test.txt"));

// Solution :
const getFileExtention = (str) => str.slice(str.lastIndexOf("."));
console.log(getFileExtention("webpack.config.js"));
