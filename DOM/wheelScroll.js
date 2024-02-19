document.addEventListener("wheel", function (e) {
  let aside = document.querySelector("aside");
  let body = document.body;

  if (e.deltaY > 0) {
    aside.style.backgroundColor = "red";
    body.style.fontSize = "30px";
  } else if (e.deltaY < 0) {
    aside.style.backgroundColor = "green";
    body.style.fontSize = "30px";
  } else {
    aside.style.backgroundColor = "";
    body.style.fontSize = "";
  }
});
window.addEventListener("scroll", () => {
  let divScrolled = document.querySelector(".testScroll");
  let y = window.scrollY;
  console.log(y);
  if (y > 630) {
    divScrolled.classList.add("scrollan");
  } else {
    divScrolled.classList.remove("scrollan");
  }
});
