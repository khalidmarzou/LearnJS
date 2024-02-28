// prenventDefault() : don't execute elements html par defaut
// document.addEventListener("keydown", (event) => {
//   console.log(event.key);
//   console.log(event.keyCode);
//   console.log("key down");
// });
// document.addEventListener("keypress", () => {
//   console.log("key press");
// });
// document.addEventListener("keyup", () => {
//   console.log("key up");
// });
// let nom = document.getElementById("inputTest");
// nom.addEventListener("keydown", (event) => {
//   console.log(event.keyCode);
//   console.log(event.key);
// });
function byId(id) {
  return document.getElementById(id);
}
let inputList = document.getElementsByTagName("input");
let inputUserName = inputList[0];
let inputEmail = inputList[1];
let inputPassword = inputList[2];
let btnSend = byId("btnSend");
let spanUser = byId("spanUser");
btnSend.addEventListener("click", (event) => {
  event.preventDefault();
  if (inputUserName.value === "") {
    inputUserName.classList.add("border-danger");
    spanUser.classList.remove("d-none");
  }
});

inputUserName.addEventListener("focusout", (e) => {
  e.preventDefault();
  if (inputUserName.value.length < 25 && inputUserName.value.length > 3) {
    inputUserName.classList.remove("border-danger");
    inputUserName.classList.add("border-success");
    spanUser.classList.add("d-none");
  }
});
