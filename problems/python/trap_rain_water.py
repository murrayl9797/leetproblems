class Solution:
    def trap(self, height):

        # Two pointer approach
        n = len(height)
        ans = 0

        l = 0
        r = n - 1
        max_l = height[l]
        max_r = height[r]


        # Iterate
        while l < r:

            # Move left inwards
            if height[l] < height[r]:

                # If height[l] >= max_l, no water above
                if height[l] >= max_l:

                    # Just update
                    max_l = height[l]

                # Else, water on l block
                else:
                    ans += max_l - height[l]

                # Move l
                l += 1

            # Move right inwards
            else:

                # If height[l] >= max_l, no water above
                if height[r] >= max_r:

                    # Just update
                    max_r = height[r]

                # Else, water on r block
                else:
                    ans += max_r - height[r]

                # Move r
                r -= 1



        # Return answer
        return ans


s = Solution()
print(s.trap([4,2,0,3,2,5]))