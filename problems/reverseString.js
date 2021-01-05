/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let l = 0;
  let r = s.length - 1;

  while (l < Math.floor(s.length / 2)) {
      [s[l], s[r]] = [s[r], s[l]];

      l++;
      r--;
  }

  return s;
};