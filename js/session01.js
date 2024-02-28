const stagiaire = {
  nom: "marzoug",
  prenom: "khalid",
  branche: "DD",
};
// console.log(stagiaire);
// stagiaire.branche = "DEV";
// console.log(stagiaire);
// delete stagiaire.branche;
// console.log(stagiaire);

const stagiaires = new Array("AHMED", "MOHAMED", "KHALID", "AHMED"); // for create new array
// console.log(stagiaires.length);
// console.log(stagiaires[1]);
// console.log(stagiaires.indexOf("KHALID"));
// console.log(stagiaires.indexOf("AHMED", 2));

stagiaires.forEach(function (itemValue, itemInex, stArray) {
  console.log(itemValue);
});
