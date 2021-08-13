/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var result = '', resLen = 0;

  // Initialize pointers
  var l, r, n = s.length, currSub;

  // Loop over index
  for (var i = 0; i < n; i++) {
      // For each position, check if we're at middle of palindrome

      currSub = s[i];
      l = i-1;
      r = i+1;

      // If s[r] === s[l], odd length palindrome
      if (s[r] === s[l] && l >= 0 && r < n) {
          while (s[r] === s[l] && l >= 0 && r < n) {
              currSub = s[l] + currSub + s[r];
              l--;
              r++;
          }
      }

      if (currSub.length > result.length) {
          result = currSub;
      }

      currSub = s[i];
      l = i
      r = i+1;
      // Check even length palindrome
      if (s[r] === s[i] && r < n) {

          currSub = currSub + s[r];
          l--;
          r++;
          while (s[r] === s[l] && l >= 0 && r < n) {
              currSub = s[l] + currSub + s[r];
              l--;
              r++;
          }
      }

      // See if palindrome is longer than result
      if (currSub.length > result.length) {
          result = currSub;
      }
  }
  return result;
};