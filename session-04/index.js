/* let st = {
    name : "khalid",
    age : 24
}
let cst = {}
Object.assign(cst,st)
console.log(cst)
console.log(st)

cst.name = "ziko"
cst.rien = NaN
cst.dev = [105,106,107]

console.log(cst)
console.log(st)*/

/*let annee;
let nAnnee;

annee = "2024"
nAnnee = Number(annee)

console.log(nAnnee)
console.log(typeof(nAnnee))

let groupe = 105;
let sgroupe = String(groupe);
console.log(sgroupe)
console.log(typeof(sgroupe))

let x = true;
let y = false;
let z = Number(x);
let a = Number(y);
console.log(z,a)
console.log(String(x) + "khalid")
console.log(Number(true))
console.log(Boolean(1))

let num = "101";
let nNum =+ num
console.log(nNum)
console.log(typeof(nNum))

console.log(Number(false))*/

/*let groupe = 105;
let sGroupe;

sGroupe = groupe.toString();
console.log(sGroupe);
let x = (100+23).toString();
console.log(x)
console.log(typeof(x))*/

let vDate = new Date(); //Date Live
console.log(vDate);
console.log(vDate.getDate()); //numero du jour 1 - 31
console.log(vDate.getDay()); //numero du jour de la semaine 0 - 6
console.log(vDate.getFullYear()); //numero d'annee
console.log(vDate.getHours());
console.log(vDate.getMilliseconds());
console.log(vDate.getMinutes());
console.log(vDate.getMonth());
console.log(vDate.getSeconds());
console.log(vDate.getTime());

console.log(vDate.getFullYear().toString());
console.log(String(vDate.getHours()));

if (vDate.getMilliseconds() < 100) {
  console.log("Ok");
} else {
  console.log("No");
}
