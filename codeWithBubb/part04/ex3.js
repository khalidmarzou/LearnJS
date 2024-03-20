/**write a js prog to convert a comma-separated values (csv)
 * string to a 2D array. A new line indicates a new row in the array
 * examples :
 * abc,def,ghi
 * jkl,mno,pqr
 * qtu,vwx,yza
 */

const csv = `abc,def,ghi
jkl,mno,pqr
qtu,vwx,yza`;

// My Solution :
const parseCSV = (csv) => csv.split("\n").map((value) => value.split(","));
console.log(parseCSV(csv));
//Bubb Solution :
// same Solution