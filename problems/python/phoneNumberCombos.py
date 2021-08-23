class Solution:

    _map = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz",
    }

    def letterCombinations(self, digits: str) -> List[str]:

        if digits == "":
            return []

        n = len(digits)
        res = []

        def recursiveFn(currStr, remaining):

            # Base
            if len(remaining) == 0:
                res.append(currStr)
                return

            # Recursive
            head, tail = remaining[0], remaining[1:]

            for c in self._map.get(head):

                recursiveFn(currStr + c, tail)

        # Kick off recursive func
        recursiveFn("", digits)

        return res
