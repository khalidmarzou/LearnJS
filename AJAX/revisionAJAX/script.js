// AJX loads in data without refreshing the browser
// Load an API that changes the photo when the page is refreshed:
function getById(id) {
  return document.getElementById(id);
}
let dogImg = getById("dogImg");

fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    dogImg.setAttribute("src", data.message);
  })
  .catch((error) => {
    alert("error in fetching of the api dog images", error);
  });

// Now let's Try AJAX in article Zone :
let btnLoad = getById("btnLoad");
let article = getById("article");
let btnClear = getById("clear");

btnLoad.addEventListener("click", loadData);
function loadData() {
  let request = new XMLHttpRequest();
  request.open("GET", "file.txt", true);
  request.onreadystatechange = function () {
    this.status == 200 && this.readyState == 4
      ? (article.innerHTML = this.responseText)
      : null;
  };
  request.send();
}

btnClear.addEventListener("click", () => (article.innerHTML = ""));