var findMedianSortedArrays = function(nums1, nums2) {
  var n1 = nums1.length;
  var n2 = nums2.length;
  var merged = [];

  var odd = ((n1 + n2) % 2) === 1 ? true : false;

  var p1 = 0, p2 = 0, seen = 0;

  var mid = Math.floor((n1 + n2) / 2);

  while (seen <= mid) {
      if (nums2[p2] === undefined || nums1[p1] < nums2[p2]) {
          merged.push(nums1[p1]);
          p1++;
      } else {
          merged.push(nums2[p2]);
          p2++;
      }
      seen++;
  }

  var result = odd ? merged[merged.length - 1] : (merged[merged.length-1] + merged[merged.length-2]) / 2;

  return result || 0;
};

