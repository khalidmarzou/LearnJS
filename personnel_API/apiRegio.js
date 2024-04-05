function test() {
  let request = new XMLHttpRequest();
  request.open("GET", "https://khalidmarzoug.pythonanywhere.com/", true);
  request.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      console.log(JSON.parse(this.responseText).data);
    }
  };
  request.send();
}
