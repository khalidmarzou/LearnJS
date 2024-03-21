/**write a js function to convert an amount to coins :
 * example input : 46 and possible coins 25, 10, 5, 2, 1
 * output : 25, 10, 10, 1
 */

// My Solution :
const coinsStr = "25,10,5,2,1".split(",");
const coins = coinsStr.map((item) => Number(item));

const amountToCoins = (amount, possibleCoins = coins) => {
  let coinsFound = [];
  while (amount !== 0) {
    for (let item of possibleCoins) {
      if (amount / item === Math.floor(amount / item) && amount !== 0) {
        coinsFound.push(item);
        amount -= item;
        console.log(amount);
        break;
      }
    }
  }
  return coinsFound.sort((a, b) => b - a).join(", ");
};
console.log(amountToCoins(120));
console.log(amountToCoins(10000, [200, 100, 50, 20, 10, 5, 2, 1])); // for morocco

// Bob Solution :
