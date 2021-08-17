class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:

        # Init values
        _map = {}
        result = 0
        left = 0

        # Iterate
        for right in range(len(s)):

            curr_char = s[right]

            # Check if curr_char is in map
            if curr_char in _map:
                left = max(_map[curr_char], left)

            result = max(result, right - left + 1)
            _map[curr_char] = right + 1

        return result




