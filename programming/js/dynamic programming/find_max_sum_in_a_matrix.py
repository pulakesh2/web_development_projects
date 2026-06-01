def solve(A):
    n = len(A)
    m = len(A[0])
    dp = [[-1 for j in range(m)] for i in range(n)]

    return max_sum(A = A, i = 0, j = 0, dp = dp)

def max_sum(A, i, j, dp):
    if i == len(A)-1 and j == len(A[0])-1:
        dp[i][j] = A[i][j]
        return A[i][j]
    if i >= len(A) or j >= len(A[0]):
        return float('inf')
    left = max_sum(A, i, j + 1, dp)
    down = max_sum(A, i + 1, j, dp)

    dp[i][j] = min(left, down) + A[i][j]
    return dp[i][j]


A = [
    [1, -3, 2],
    [2, 5, 10],
    [5, -5, 1],
]

print(solve(A))