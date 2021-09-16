class Solution:
    def trap(self, height):

        # Find how much can be trapped onto of each position
        res = 0
        n = len(height)

        for ind, curr in enumerate(height):

            # Cannot store water on first or last
            if ind == 0 or ind == n - 1:
                continue

            # Find how much water can be trapped on curr
            l = r = ind
            max_l = -1
            max_r = -1
            amount = 0

            while l >= 0 and r <= n - 1:

                # Update variables
                l = l if l == 0 else l - 1
                r = r if r == n - 1 else r + 1
                max_l = max(max_l, height[l])
                max_r = max(max_r, height[r])

                # Update curr amount
                diff = min(max_l, max_r) - curr
                amount = max(amount, diff)

                if l == 0 and r == n - 1:
                  break


            # print(f"Ind: {ind}, ({max_l}, {max_r}) - {amount}")
            res += amount


        # Return result
        return res


s = Solution()
print(s.trap([4,2,0,3,2,5]))