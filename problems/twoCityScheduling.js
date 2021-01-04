/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  // Decompose into one sorted array
  // const complexArray = [];
  // let i = 0;

  // for (let [costA, costB] of costs) {
  //     complexArray.push([costA, costB, costB - costA]);
  // }

  costs.sort((a,b) => (b[1] - b[0]) - (a[1] - a[0]));

  // Once decomposed, add all A, then add B
  const n = (costs.length / 2);
  let countA = 0;
  let sum = 0;

  for (let [costA, costB] of costs) {
    if (countA < n) {
      sum += costA;
      countA++;
    } else {
      sum += costB;
    }
  }

  // Return result
  return sum;
};

const input = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
console.log(`Answer:`, twoCitySchedCost(input));