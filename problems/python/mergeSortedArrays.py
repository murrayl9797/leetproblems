class Solution:
    def merge(self, nums1, m: int, nums2, n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        
        i = m - 1

        j = n - 1

        k = m + n - 1

        while k >= 0:
            print(nums1, i, nums2, j, f"{k=}")
            if j == -1 or i > -1 and nums1[i] > nums2[j]:
                nums1[k], nums1[i] = nums1[i], nums1[k]
                i -= 1
                k -= 1
            elif i == -1 or j > - 1 and nums2[j] >= nums1[i]:
                nums1[k] = nums2[j]
                j -= 1
                k -= 1


x = [1,2,3,0,0,0]

y = [2,5,6]

Solution.merge(0, x, 3, y, 3)

print(x)