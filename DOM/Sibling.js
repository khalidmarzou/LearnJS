console.log(document.body.childNodes);
console.log(document.body.childNodes[0]);
let childesBody = document.body.childNodes;
console.log(childesBody[childesBody.length - 1]);
console.log(document.body.childNodes[0].nodeType); // return 3 // it's mean text
// 1 --> element / 2 --> attribute / 3 --> text;
console.log(document.querySelector("ul").childNodes);
// to sible the child node
console.log(document.querySelector("ul > li").parentNode);
// to sible the parent node
console.log(document.querySelector("ul > li > p").nextSibling);
// to sible the next element
console.log("first child : ", document.querySelector("ul").firstChild);
// to sible the first child and last to the last child
console.log(
  "first child : ",
  document.querySelector("ul > li:nth-of-type(2)").firstChild
);
console.log(
  "first Element : ",
  document.querySelector("ul > li:nth-of-type(2)").firstElementChild
);
/* the diference between child and element in first is that element select the first tag ,
and the first child select the first thing(for example text ...)*/
// to test if and element in html a elemnt_Node :
// we use ELEMENT_NODE to test if an element have type 1 in typeNode or not we can use it to return true or false
// example :

let node = document.documentElement.firstChild;
if (node.nodeType != Node.COMMENT_NODE)
  console.log("You should comment your code well!");
// the first CHild node isn't an comment
