/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  const found = {};

  for (let num of nums) {
      if (!found[num]) {
          found[num] = 1;
      } else {
          return num;
      }
  }
};