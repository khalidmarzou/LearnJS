let parent = document.getElementById("parent");
let firstChild = document.getElementById("firstChild");
let secondChild = document.getElementById("secondChild");
let randomIndexLeft;
let randomIndexBg;
let firstBg;
let lastBg;
count = 0;
let listLeft = ["0%", "25%", "50%", "75%"];
let listBg = [
  "bg-primary",
  "bg-warning",
  "bg-dark",
  "bg-info",
  "bg-success",
  "bg-secondary",
  "bg-danger",
];
function getRandomLeft() {
  randomIndexLeft = Math.floor(Math.random() * listLeft.length);
  return listLeft[randomIndexLeft];
}
function getRandomBg() {
  randomIndexBg = Math.floor(Math.random() * listBg.length);
  return listBg[randomIndexBg];
}
let checkInterval = setInterval(() => {
  count++;
  console.log(count);
  if (count === 1) {
    firstBg = getRandomBg();
    firstChild.className = firstChild.className.replace("bg-warning", firstBg);
  } else {
    lastBg = getRandomBg();
    firstChild.className = firstChild.className.replace(firstBg, lastBg);
    firstBg = lastBg;
  }
  firstChild.style.left = getRandomLeft();
}, 2000); // setInerval call a function evry 2s in this case

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    console.log(event.key);
  } else if (event.key === "ArrowLeft") {
    console.log(event.key);
  }
});
