let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let data = "Hello World JS !!";
    resolve(data);
  }, 4000);
});
myPromise
  .then((result) => {
    console.log("Promise resolved : ", result);
  })
  .catch((error) => {
    console.log("Promise rejected : ", error);
  });

console.log("teeeest");
