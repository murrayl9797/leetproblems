class Solution:
    def numWays(self, n: int, k: int) -> int:
        self.total_count = 0

        # Set up recursive helper
        def recurseFn(postsLeft, colors, prevQ):

            # Base case
            if postsLeft == 0:
                self.total_count += 1
                return

            # Recursive Cases
            for color in range(colors):
                copyQ = prevQ.copy()

                # Check against previous 2
                if color == prevQ[1] and prevQ[1] == prevQ[0]:
                    continue

                else:
                    # Else, try this color and move on
                    copyQ.pop(0)
                    copyQ.append(color)

                    #print(postsLeft, colors, prevQ)
                    recurseFn(postsLeft - 1, colors, copyQ)

        # Init recursive fn
        recurseFn(n, k, [-1, -1])

        return self.total_count


s = Solution()
print(s.numWays(2, 46340))