def solve(A):
    n = len(A)
    dp = [[None] * len(A[i]) for i in range(n)]
    return min_sum(A, 0, 0, dp)

def min_sum(A, i, j, dp):

    if i == len(A) - 1:
        return A[i][j]

    if dp[i][j] is not None:
        return dp[i][j]

    left  = min_sum(A, i + 1, j,dp)
    right = min_sum(A, i + 1, j + 1, dp)


    dp[i][j] = A[i][j] + min(left, right)
    return dp[i][j]


# arr =   [
#          [2],
#         [3, 4],
#        [6, 5, 7],
#       [4, 1, 8, 3]
#     ]

arr = [ [1] ]
print(solve(arr))