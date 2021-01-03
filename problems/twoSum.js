/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var found = {};
  var j;

  for (var i = 0; i < nums.length; i++) {
      if (!found[nums[i]]) {
          found[nums[i]] = i;
      }
  }

  for (var i = 0; i < nums.length; i++) {
      j = target - nums[i];
      if (found[j] && found[j] !== i) {
          return [i, found[j]];
      }
  }
};