// Les Boucles :
const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];

for (i = 0; i <= 4; i++) {
  console.log(jours[i]);
}
for (item in jours) {
  console.log(item);
}
for (item of jours) {
  console.log(item);
}

/* NB Les valeurs simple ne modifier pas en tant de constante
mais les valeurs complexe c est possible de modifier*/

let txt = "";
function test(value, index, array) {
  txt += value + " ";
}
jours.forEach(test);
console.log(txt);

/* le language javaScript est execute ligne par ligne , ms a l aide de V8 par
example dans chrome , js lire all the blog and after that it execute ligne par
ligne mais il connais all the position of elements in the blog. 
JS is generally considered an interpreted language,
but modern Js engines no longer just interpret JS, they compile it. */
// La boucle while (Tant_Que):

let n = 2;
while (n >= 0) {
  console.log(n);
  n -= 1;
}
do {
  console.log(n);
  n -= 1;
} while (n >= 0);

// en break and continue we can use both to break or continue in the boucle

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  console.log("Test : ", i);
}

// in this example we use continue to don't execute number 3 ;