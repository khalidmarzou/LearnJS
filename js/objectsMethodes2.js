// method 2 (ES6) :
class Achat {
  constructor(id, article, prix, qte) {
    this.id = id;
    this.article = article;
    this.prix = prix;
    this.qte = qte;
  }
  calculerTVA() {
    let totale = this.prix * this.qte;
    let totaleTTC = totale + totale * 0.2;
    return totaleTTC;
  }
}

const achat1 = new Achat(1, "Hell", 12, 20);
const achat2 = new Achat(2, "Burn", 10, 30);
const achat3 = new Achat(3, "Fanta", 5, 50);
const achat4 = new Achat(4, "Coca", 6, 100);

console.log(achat4.calculerTVA());
