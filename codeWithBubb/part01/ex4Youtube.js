// write a js program to get the current date : mm-dd-yyyy

function currentDate() {
  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();

  if (String(month).length < 2) {
    month = "0" + month;
  } else if (String(day).length < 2) {
    day = "0" + day;
  }
  
  console.log(`${month}-${day}-${year}`);
}

currentDate();
