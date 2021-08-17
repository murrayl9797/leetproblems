class Solution(object):
    def numWays(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: int
        """
        if k == 0 or n == 0:
            return 0
        if n == 1:
            return k

        same = k * 1
        diff = k * (k - 1)
        for _ in range(3, n + 1):
            same, diff = diff, (same + diff) * (k - 1)

        return same + diff



s = Solution()
print(s.numWays(3, 1235))