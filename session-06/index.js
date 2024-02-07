// Les Fonctions en Js :
/* En a deux types de Fonction en Js : des Fonctions deja prepare par Js
(Les Methodes) et les fonction creer par les develloper */
// function declaration :
/* function greet (){
  console.log("Hello World !!")
}
greet()
function somme (a,b){
  return a + b
}
console.log(somme(2,3))
// function expressions :
let sm = function(a,b){
  return a + b
}
console.log(sm(5,7))*/
// NB : en peut utilise cette function derectement dans console.log()
// Les fonction flechees (arrow functions) :
/* let a = function () {
  return console.log("Welcome to Js World !!");
};

let greet = () => {
  return console.log("Welcome to Js World !!");
};

let greet1 = () => console.log("syntaxe function in one single line");

let nomComplet = (nom, prenom) => {
  let fullName = nom + " " + prenom;
  return fullName;
};

console.log(nomComplet("KHALID", "MARZOUG"));
a();
greet1();
greet(); */

// Les expressions Lambda :
// map (NB : return new table)
// const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
/* jours.map(function (item) {
  return console.log(item);
}); */
/* jours.map((item) => {
  if (item === "Jeudi") {
    item += "* jour férié";
  }
  return console.log(item);
}); */
// explaication du ...
/*
let a = {nom : "marzoug"};
a["prenom"] = "khalid";
a.age = 24
let b;
b = {...a,id : 1};
console.log("Testtttt",b);
*/
/*
stagiaires.map((object) => {
  fullName = object["nom"] + " " + object.prenom;
  return fullName;
});
let nameList;
nameList = stagiaires.map((object) => {
  fullName = object["nom"] + " " + object.prenom;
  return fullName;
});
console.log(stagiaires);
console.log(nameList);
*/
// first way
// [a,b,c,d]
/*
let nameAge;
nameAge = stagiaires.map((item, index, arrStagiaires) => {
  // {nom: "MARZOUG", prenom: "KHALID", age: 24 , branche : "DD", id : 1 , remarque : "plus de 20 ans"} // moin de 20 ans pour < 20
  let st;
  st = { ...item, branche: "DD", id: index + 1 }; // { nom: "MARZOUG", prenom: "KHALID", age: 24 }

  return st;
});
console.log(nameAge);
*/
const stagiaires = [
  { nom: "MARZOUG", prenom: "KHALID", age: 24 }, // index : 0
  { nom: "SIDQUI", prenom: "ZAKARIA", age: 22 },
  { nom: "HILMI", prenom: "ILYAS", age: 18 },
  { nom: "OUAFIK", prenom: "MOHAMED", age: 18 },
];
// ajouter remarque du age :
let stagiairesRemarque;
stagiairesRemarque = stagiaires.map((item, index, array) => {
  let stR;
  let r;
  if (item.age >= 20) {
    r = "Plus de 20 ans";
  } else if (item.age < 20) {
    r = "moin de 20 ans";
  }
  stR = { ...item, remarque: r };
  return stR;
});
console.log(stagiairesRemarque);
