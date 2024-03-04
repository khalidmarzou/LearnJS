// splice :
list = [1, 8, 6, 9, 3, 2];
list.splice(0, 3); // delete from index 0, six elements [9,3,2]
list.push(7); // add in last [9,3,2,7]
list.unshift(2); // add in first [2,9,3,2,7]
list.shift(); // delete the first element [9,3,2,7]
list.pop(); // delete the last element [9,3,2]
list.reverse(); // reverse the array [2,3,9]
list.sort(); // Tri [2,3,9]
console.log(list);
