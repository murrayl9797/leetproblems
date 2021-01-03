/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var result = [];
  nums = nums.sort((a,b) => (a - b));
  //console.log(nums);

  for (var i = 0; i < nums.length; i++) {
      var a = nums[i];
      if (nums[i] === nums[i-1]) {
          continue;
      }

      var l = i + 1;
      var r = nums.length - 1;

      while (l < r) {
          //console.log('Current sum: ', nums[i] + nums[l] + nums[r])
          var sum = nums[i] + nums[l] + nums[r];
          if (sum > 0) {
              r--;
          } else if (sum < 0) {
              l++;
          } else {
              //console.log('Added!\n')
              result.push([a, nums[l], nums[r]]);
              l++;
              while(nums[l] === nums[l-1] && l < r) {
                  l++;
              }
          }
      }
  }


  return result;

};