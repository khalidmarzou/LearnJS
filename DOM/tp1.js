let a;
let b;
a = Number(document.querySelector(".nombreUn").value);
b = Number(document.querySelector(".nombreDeux").value);
let somme = a + b;
document.querySelector(".result").value = somme;
inputResult = document.querySelector(".result");
if (inputResult.value > 20) {
  inputResult.style.backgroundColor = "green";
} else {
  inputResult.style.backgroundColor = "red";
}
inputResult.style.color = "white"
inputResult.style.fontStyle = "italic"
inputResult.style.textAlign = "center"
document.querySelector(input).style.textAlign = "center"