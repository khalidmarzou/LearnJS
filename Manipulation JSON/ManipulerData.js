let display = document.getElementById("display");
let count = -1;
function getData() {
  count++;
  const request = new XMLHttpRequest();
  request.open("GET", "data.json", true);
  request.onload = function () {
    const responseList = JSON.parse(request.responseText);
    responseList.forEach((element, index) => {
      if (index === count) {
        display.innerHTML = element.name;
      }
    });
    count === responseList.length - 1 ? (count = -1) : null;
  };
  request.onerror = () => console.error("error in fetching request");
  request.send();
}
document.getElementById("btn").addEventListener("click", getData);
