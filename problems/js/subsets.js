/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  // Initialize with empty set
  const result = [[]];

  for (let i = 0; i < nums.length; i++) {
      let currNum = nums[i];

      const n = result.length;
      for (let j = 0; j < n; j++) {
          let subset = result[j].slice();
          subset.push(currNum);
          result.push(subset);
      }
  }

  return result;
};