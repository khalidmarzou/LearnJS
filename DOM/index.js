/*  DOM : facilite de cibler tous les elements du arbres
    du documents our modifier , supprimer ou ajouter
    les elements du arbre comme body head ...ect s appele
    les noeudes */
console.log(document.querySelector(".nom"));
// en affiche tous les attributs du  l'element de class .nom
console.log(document.querySelector(".nom").value);
// en affiche valeur d element selectionner
document.querySelector(".nom").value = "AHMED";
// en affecte une valeur a lavaleur initiale du elements