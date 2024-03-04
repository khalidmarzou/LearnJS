function Achat(id, article, prix, qte) {
  this.id = id;
  this.article = article;
  this.prix = prix;
  this.qte = qte;
  this.calculerTVA = () => {
    let tva = this.prix * 0.2;
    let prixProduit = tva + this.prix;

    return prixProduit;
  };
}

const achat1 = new Achat(123, "Hell", 10, 100);
const achat2 = new Achat(124, "Burn", 11, 200);

console.log(
  `Votre prix totale du ${achat1.qte} de ${
    achat1.article
  } apres l'ajoute du TVA est  ${achat1.calculerTVA() * achat1.qte} dhs`
);
console.log(
  `Votre prix totale du ${achat2.qte} de ${
    achat2.article
  } apres l'ajoute du TVA est  ${achat2.calculerTVA() * achat2.qte} dhs`
);
