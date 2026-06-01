
def uniquePathsWithObstacles( A):
        rows = len(A)
        cols = len(A[0])

        if A[0][0] == 1 or A[rows-1][cols-1] == 1:
            return 0

        dp = [[-1 for _ in range(cols)] for _ in range(rows)]
        return ways(rows - 1, cols - 1, A, dp)


def ways(self, i, j, A, dp):
        if i < 0 or j < 0:
            return 0

        if A[i][j] == 1:
            return 0

        if i == 0 and j == 0:
            return 1

        if dp[i][j] != -1:
            return dp[i][j]

        up = ways(i - 1, j, A, dp)
        left = ways(i, j - 1, A, dp)

        dp[i][j] = up + left
        return dp[i][j]
