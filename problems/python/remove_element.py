class Solution:
    def removeElement(self, nums, val: int) -> int:
        '''
        nums = [2,2,3,3], val = 2
                  l
                  r
            k = 1
                0 1 2 3 4 5 6 7 8
        nums = [2,2,0,2,2,1,4,4,1,4,3,4], val = 4
                  l                 r 
            k = 0
        '''

        l = 0

        r = len(nums) - 1

        k = 0

        if len(nums) == 0:
            return 0

        while l < r:
            print('a:', l, r, k, nums)
            if nums[l] != val:
                k += 1
                l += 1
            else:
                while l < r:
                    print('b:', l, r, k, nums)
                    if nums[r] != val:
                        nums[r], nums[l] = nums[l], nums[r]
                        l += 1
                        r -= 1
                        k += 1
                        break
                    else:
                        r -= 1
        return k if nums[l] == val else k + 1
        

x = [4,2,0,2,2,1,4,4,1,4,3,2]

answer = Solution.removeElement(0, x, 4)

print('\n', answer, x)