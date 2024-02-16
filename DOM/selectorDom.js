// querySelector selects only one element (the first element with the class .element)
// querySelectorAll selects all elements with the class .element
console.log(document.querySelector(".element"));
console.log(document.querySelectorAll(".element"));
//All return a list and we can work on this list with a loop.
let listElements = document.querySelectorAll(".element"); // return NodeList
for (i = 0; i < listElements.length; i++) {
  listElements[i].style.backgroundColor = "orange";
}
// in querySelector we use selectors of css
listElements[2].style.transform = `translate(${100}px, ${0}px)`;
listElements[2].style.transitionProperty = "transform";
listElements[2].style.transitionDuration = "3s";
document.querySelector(".container").style.margin = "50px";
// we have also : getElementsByClassName("name of class") return list (collection html)
// getElementById return a Value
// getElementsByTagName return the same of className
// getElementsByName return the same of className and TagName