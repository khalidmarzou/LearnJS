// write a js program that add New! to a str , but if this str already begining with New! return the original str

function addNew(str) {
  let indexOfNew = str.indexOf("New!");
  if (indexOfNew === 0) {
    return str;
  } else {
    return `New! ${str}`;
  }
}

console.log(addNew("khalid"));
