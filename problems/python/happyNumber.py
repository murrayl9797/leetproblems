class Solution:
    def isHappy(self, n: int) -> bool:

        def recursiveHelper(num: str, seenSoFar: set):
            print(num, seenSoFar)

            # Base Case
            if num == "1":
                return True

            elif num in seenSoFar:
                return False

            # Recursive case
            newNum = 0

            for c in num:
                newNum += int(c) ** 2

            # Add num to set
            seenSoFar.add(num)

            return recursiveHelper(str(newNum), seenSoFar)


        # Init recursive fn
        return recursiveHelper(str(n), set())

s = Solution()

print(s.isHappy(3))