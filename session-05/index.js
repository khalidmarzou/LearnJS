// switch (suivant cas) :
let date = new Date().getDay();
let day = "";
switch (date) {
  case 0:
    day = "sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wenesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "null";
}
console.log("C'est ", day);
let vAbrev = "DD";
let branche = "";
switch (vAbrev) {
  case "WD":
    branche = "Web Design";
    break;
  case "ID":
    branche = "Infrastructure Digital";
    break;
  case "DD":
    branche = "Developpement Digital";
}
console.log("La branche est ", branche);