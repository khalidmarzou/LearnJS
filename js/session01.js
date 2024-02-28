const stagiaire = {
  nom: "marzoug",
  prenom: "khalid",
  branche: "DD",
};
// // console.log(stagiaire);
// stagiaire.branche = "DEV";
// // console.log(stagiaire);
// delete stagiaire.branche;
// // console.log(stagiaire);

const stagiaires = new Array("AHMED", "MOHAMED", "KHALID", "AHMED"); // for create new array
// // console.log(stagiaires.length);
// // console.log(stagiaires[1]);
// // console.log(stagiaires.indexOf("KHALID"));
// // console.log(stagiaires.indexOf("AHMED", 2));

// stagiaires.forEach(function (itemValue, itemInex, stArray) {
//   // console.log(itemValue);
// });
const copieStagiaires = stagiaires.map(function (itemValue, itemIndex) {
  return itemValue + "DEV";
});

// console.log(copieStagiaires);

stagiaires.push("YASSIN");
// console.log(stagiaires);
stagiaires.unshift("YOUSSEF"); // add in the first value
// console.log(stagiaires);

stagiaires.pop();
// console.log(stagiaires);

stagiaires.shift();
// console.log(stagiaires);

const modules = ["ZZ", "ALGO", "HTML", "CSS", "POO", "ALGO"];

// modules.splice(1, 1); // supression ensemble des valeurs
// console.log(modules);

// modules.sort();
// console.log(modules);

// modules.reverse();
// console.log(modules);

let algoMd = modules.find((item) => {
  return item === "ALGO";
});

let filterTest = modules.filter((item) => {
  return item === "ALGO";
});

let findIndexTest = modules.findIndex((item) => {
  return item === "ALGO";
});

console.log(findIndexTest);
