def solve(A):
    dp = [n][m] #fill with -1

    return ways(len(A), len(A[0]), dp)


def ways(i, j, dp):
    if i < 0 or j < 0:
        return 0
    if i == 0 and j == 0:
        dp[i][j] = 1
        return 1

    if dp[i][j] != -1:
        return dp[i][j]

    ans = ways(i-1, j,dp) + ways(i, j-1, dp)

    dp[i][j] = ans
    return ans