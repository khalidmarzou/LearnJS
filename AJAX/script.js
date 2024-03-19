document.getElementById("btn-load").addEventListener("click", loadTxt);

function loadTxt(e) {
  e.preventDefault();
  let request = new XMLHttpRequest();
  request.open("GET", "infos.txt", true);
  // 1st method :
  request.onreadystatechange = function () {
    console.log(request);
    console.log(this);
    if (this.readyState == 4 && this.status == 200) {
      console.log(request.responseText);
      document.getElementById("container").innerHTML = request.responseText;
    }
  };
  request.send();
}
