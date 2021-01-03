/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  let currArea, l = 0, r = height.length - 1;

  while (l < r) {
      // Check current area between pointers
      currArea = Math.min(height[l], height[r])*(r-l);

      // Update max area
      max = currArea > max ? currArea : max;

      // Check if we should move l or r
      height[l] > height[r] ? r-- : l++;
  }

  return max;
};