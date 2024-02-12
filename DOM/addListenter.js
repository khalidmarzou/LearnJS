// fonction annonime :
/*document.querySelector(".btn-calculer").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("You Click Here !");
});*/
// avec fonction fléché array function :
// document.querySelector(".btn-calculer").addEventListener("click", (e) => {
//  e.preventDefault();
//  console.log("You Click Here !");
// });
// in this examplewe use evenement to execute a function when we click on the button
// we cible the button and add methode "addEventListener" (evenement, function)
// we add e.preventDefautl to dont let the browser to make a default changes in the function
// when we execute (click on the button) the function work automaticlly and the result stay in the console

// example de make a simple operation :
document.querySelector(".btn-calculer").addEventListener("click", function (e) {
  e.preventDefault();
  let somme =
    Number(document.querySelector(".firstNumber").value) +
    Number(document.querySelector(".secondNumber").value);
  return console.log(somme);
});
