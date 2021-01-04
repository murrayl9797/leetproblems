/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  // Sort array based on profit for going to city A over city B
  costs.sort((a,b) => (b[1] - b[0]) - (a[1] - a[0]));

  // Once decomposed, add n people to city A, then add rest to B
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