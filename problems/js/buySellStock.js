/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minSoFar = Number.MAX_VALUE;
  let maxProf = 0;

  for (var stock of prices) {
      if (stock < minSoFar) {
          minSoFar = stock;
      }

      if (stock - minSoFar > maxProf) {
          maxProf = stock - minSoFar;
      }
  }
  return maxProf;
};