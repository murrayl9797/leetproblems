class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        # Iterate over list, and store values as we go
        seenSoFar = {}


        # Iterate
        for index, num in enumerate(nums):

            # Check if we've found answer
            diff = target - num
            diffIndex = seenSoFar.get(diff)

            if diffIndex != None:
                return [diffIndex, index]


            # If not, add to seen and keep going
            seenSoFar[num] = index


        # If no answer, return []
        return []
