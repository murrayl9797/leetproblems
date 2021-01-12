/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  // Init variables
  let openLeft = 0;
  let hopelessRight = 0;

  // Iterate over string
  for (const paren of S) {
      if (paren === '(') {
          openLeft++;
      } else if (paren === ')' && openLeft > 0) {
          openLeft--;
      } else {
          hopelessRight++;
      }
  }

  // Return result
  return openLeft + hopelessRight;
};