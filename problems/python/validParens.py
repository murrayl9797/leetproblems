class Solution:
    def isValid(self, s: str) -> bool:

        # Stack represented by array
        stack = []


        # Iterate over s
        for p in s:

            # Handle falses
            if p in [")", "}", "]"]:

                if len(stack) == 0:
                    return False

                q = stack.pop()

                if p == ")" and not q == "(":
                    return False
                elif p == "}" and not q == "{":
                    return False
                elif p == "]" and not q == "[":
                    return False

            else:
                stack.append(p)

        # Check if stack is empty
        if len(stack) == 0:
            return True
        else:
            return False
