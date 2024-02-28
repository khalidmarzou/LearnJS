let parent = document.querySelector(".background");
let childs = parent.childNodes;

for (let i = 0; i < childs.length; i++) {
  if (childs[i].nodeName === "DIV") {
    setTimeout(() => {
      childs[i].style.backgroundColor = "rgb(1, 246, 0)";
    }, (i + 1) * 100);
  }
}