class Solution:
    def maxProfit(self, prices: List[int]) -> int:

        # Init values
        maxProf = 0
        minSoFar = math.inf

        for p in prices:

            minSoFar = min(minSoFar, p)
            maxProf = max(maxProf, p - minSoFar)

        return maxProf