/* write a js prog to check whether a given array
    of ints is sorted in ascending order */

// My Solution :
const arr = [1, 2, 3, 4, 5, 6, 7];
function checkSortASC(arr) {
  const arr1 = [...arr];
  arr1.sort((a, b) => a - b);
  return (
    arr.filter((value, index) => arr1[index] === value).length === arr.length
  );
}
console.log(checkSortASC(arr));
// console.log(arr === arr1); false because they haven't same reference
// like we see sort() function edit in the original array
// So we need to create a copy of the original array
// feeling cool after resolve that

// BOB Solution :
const isAsc = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) return false;
  }
  return true;
};
console.log(isAsc(arr));

// just for check some questions :
console.log(arr[arr.length] < arr[arr.length - 1]); // undefined < number --> false
