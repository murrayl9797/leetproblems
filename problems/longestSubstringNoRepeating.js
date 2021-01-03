/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var result = 0;
  var maxSub = 0;
  var foundSub = {};
  var i = 0;

  for (let j = 0; j < s.length; j++) {

     if (!foundSub[s[j]]) {
         foundSub[s[j]] = 1;
         result = Math.max(result, Object.keys(foundSub).length);
     } else {
        while(i<j){
              if(s[i]==s[j]){
                  i++;
                  break;
              }

              delete foundSub[s[i]];
              i++;
          }
     }

  }


  return result;
};