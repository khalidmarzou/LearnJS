const stagiaire = {
  id: 1,
  nom: "MARZOUG",
  prenom: "KHALID",
  age: 24,
};

console.log(stagiaire);

// transferer object stagiaire a JSON :
let stagiaireJSON = JSON.stringify(stagiaire);
console.log(stagiaireJSON); // file JSON


// transferer file JSON to an Object :
stagiaireJSON = JSON.parse(stagiaireJSON);
console.log(stagiaireJSON);
