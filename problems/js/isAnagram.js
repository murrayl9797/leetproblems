/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const foundS = {};

  // Find frequency of chars in s
  for (let c of s) {
      if (!foundS[c]) {
          foundS[c] = 1;
      } else {
          foundS[c]++;
      }
  }

  // Look at chars in t
  for (let c of t) {
      if (!foundS[c]) {
          return false;
      } else if (foundS[c] === 0) {
          return false;
      } else {
          foundS[c]--;
      }
  }

  // Make sure they're all 0
  for (let key in foundS) {
      if (foundS[key] !== 0) {
          return false;
      }
  }

  // If haven't returned yet, return true;
  return true;
};