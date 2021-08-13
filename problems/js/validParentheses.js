/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var stack = [], top;
  var map = {
      '{' : '}',
      '(' : ')',
      '[' : ']'
  };

  for (var char of s) {
      if (map[char]) {
          stack.push(char);
      } else {
          top = stack.pop();
          if (char !== map[top]) {
              return false;
          }
      }
  }
  return !stack.length;
};