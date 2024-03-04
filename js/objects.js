// methode Un , methode du cour :
function Stagiaire(nom, prenom, age, branche) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.branche = branche;
  this.presentezVous = function () {
    console.log(
      `I am ${this.nom + " " + this.prenom} i'm ${this.age} || branche : ${
        this.branche
      }`
    );
  };
}

let stagiaire1 = new Stagiaire("MARZOUG", "KHALID", 24, "DD105");

console.log(stagiaire1);
console.log(typeof stagiaire1);
console.log(stagiaire1.presentezVous());
