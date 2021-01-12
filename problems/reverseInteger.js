/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let reversed = '';

  // Handle if negative
  const numString = String(x);
  const isNegative = x < 0;
  const lower = isNegative ? 1 : 0;
  const mult = isNegative ? -1 : 1;

  // Start reversing
  for (let i = numString.length - 1; i >= lower; i--) {
    reversed += numString[i];
  }

  // Check for overflow
  if (mult*Number(reversed) > 2**31 - 1 || mult*Number(reversed) < -(2**31)) {
    return 0;
  }

  return mult*Number(reversed);
};

console.log(`Answer:`, reverse(1534236469));