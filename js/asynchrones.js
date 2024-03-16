// document.getElementById("btn-google").addEventListener("click", (e) => {
//   open("https://www.google.com/");
// });

// set interval :
// let i = 0;
// setInterval(function () {
//   i++;
//   console.log(i);
// }, 1000);

// setTimeout(function () {
//   console.log("OKKKKK 5 SEC");
// }, 5000);

// appel synchrone , normal execution

// let a = 5;
// let b = 3;
// alert("HELOOOOO"); alert stop all execution untel we close it
// console.log(a + b);

// appel asynchrone :
// collback Function :

// let stagiaires = getData(function (listesStagiaires) {
//   console.log(listesStagiaires);
// });

// function getData(myCallBackFunction) {
//   setTimeout(function () {
//     return myCallBackFunction(["KADIRI", "MARZOUG", "SIDQUI"]);
//   }, 2000);
// }

// en retourner les donnes dans les parametres du fonction

// Les Promises :

// creation du Promise : or get the promise : prodecteur de promise :
// pending --> en attende de reponse
// fulfilled --> result data
// error
// class Stagiaire {
//   constructor(id, module) {
//     this.id = id;
//     this.module = module;
//   }
// }
// class Modules {
//   constructor(algo, html, js) {
//     this.algo = algo;
//     this.html = html;
//     this.js = js;
//   }
// }

// let modulesKhalid = new Modules(10, 15, 19);
// let modulesZakaria = new Modules(15, 15, 15);
// let modulesAnas = new Modules(20, 10, 16);
// let khalid = new Stagiaire(1, modulesKhalid);
// let zakaria = new Stagiaire(2, modulesZakaria);
// let anas = new Stagiaire(3, modulesAnas);
// let stagiaires = [khalid, zakaria, anas];
// stagiaires.map((item) => {
//   console.log(
//     `ID : ${item.id} html : ${item.module.html} algo ${item.module.algo} js : ${item.module.js}`
//   );
// });

// let stagiaires = function getStagiaire() {
//   return new Promise(function (resolve, reject) {
//     resolve([khalid, zakaria, anas]);
//   });
// }

// const stagiaires = getData();
// function getData() {
//   let found = true;
//   return new Promise(function (resolve, reject) {
//     if (found) {
//       return resolve([
//         { id: 1, nom: marzoug, note: 15 },
//         { id: 2, nom: sidqui, note: 18 },
//         { id: 3, nom: mahfoud, note: 19 },
//       ]);
//     } else {
//       return reject("error");
//     }
//   });
// }
// //consomation du promise :
// stagiaires
//   .then(function (response) {
//     return console.log(response);
//   })
//   .catch(function (error) {
//     return console.log(error);
//   });

// fetch :
