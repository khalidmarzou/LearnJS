// creation des elements DOM :
styleDiv = document.querySelector(".session-1").style;
styleDiv.width = "100%";
styleBtn = document.querySelector(".creer-titre").style;
styleBtn.height = "40px";
styleBtn.width = "200px";
styleBtn.fontSize = "30px";
styleBtn.fontWeight = "bold";
styleBtn.border = "2px solid grey";
styleBtn.borderRadius = "10px";
styleBtn.color = "rosybrown";
styleBtn.marginTop = "20px";
styleBody = document.body.style;
styleBody.display = "flex";
styleBody.flexDirection = "column";
styleBody.alignItems = "center";
document.querySelector(".creer-titre").addEventListener("click", (e) => {
  e.preventDefault();
  const parent = document.querySelector(".session-1");
  const titre = document.createElement("h1");
  const paragraph = document.createElement("p"); // element creer est muter a un variable
  paragraph.innerHTML = "This is a paragraph";
  titre.innerHTML = "This is a title"; // ajouter un contenus en html
  paragraph.style.backgroundColor = "yellow";
  titre.style.backgroundColor = "rosybrown";
  titre.style.color = "black";
  parent.append(titre); // c est pour creer on last child
  parent.prepend(paragraph); // c est pour creer on first child
});
document.querySelector("body h1:first-of-type").style.textAlign = "center";
document.querySelector("button:first-of-type").textContent = "Create";
document
  .querySelector("body button:nth-of-type(2)")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("body h1:first-of-type").remove();
    // .remove() pour supprimer l element selectionner
  });

document
  .querySelector(".session-1")
  .removeChild(document.querySelector(".session-1 h3:nth-of-type(2)"));
// remove the child from parent , on select parent.removeChild(child)
// pour remplacer deux element :

document
  .querySelector("body > div:last-of-type .replace")
  .addEventListener("click", function (e) {
    e.preventDefault();
    oldd = document.querySelector(".old");
    neww = document.querySelector(".new");
    document.querySelector("body > div:last-of-type").replaceChild(neww, oldd);
  });
// element.setAtrribute("attr","value") change value of attribut
// element.listClass("name class") add class
