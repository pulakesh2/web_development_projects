# Problem Description
# Shaggy has an array A consisting of N elements. We call a pair of distinct indices in that array a special
# if elements at those indices in the array are equal.
# Shaggy wants you to find a special pair such that the distance between that pair is minimum.
# Distance between two indices is defined as |i-j|. If there is no special pair in the array, then return -1.

# Input Format
# The first and only argument is an integer array A.
#
# Output Format
# Return one integer corresponding to the minimum possible distance between a special pair.


def solve(A):
    hm = {}
    ans = float('inf')

    for i in range(len(A)):
        if A[i] in hm:
            diff = i - hm.get(A[i])
            ans = min(ans, diff)

        hm[A[i]] = i

    if ans == float('inf'):
        return -1
    else:
        return ans

A = [7, 1, 3, 4, 1, 7]
print(solve(A))
