class Solution:
    def isPalindrome(self, s: str) -> bool:

        # Remove to lower and remove non-alphanumeric chars
        s = re.sub(r"[^a-zA-Z0-9]", "", s.lower())

        # Two pointer
        l = 0
        r = len(s) - 1

        # Check beginning and end are equal
        while l <= r:

            # Check
            if s[l] != s[r]:
                return False

            # Move pointers
            l += 1
            r -= 1

        return True