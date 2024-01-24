class Solution:
    def removeDuplicates(self, nums) -> int:
        """
        nums = nums = [0,1,0,1,1,1,2,2,3,3,4]
                         i
                           j
        """
        i = 1

        for j in range(1,len(nums)):
            if nums[j] != nums[j-1]:
                nums[i] = nums[j]
                i += 1
        return i
            

x = [0,0,1,1,1,1,2,2,3,3,4]

print(Solution.removeDuplicates(None, x))