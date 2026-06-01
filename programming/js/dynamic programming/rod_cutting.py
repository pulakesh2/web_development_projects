def solve(A):
    n = len(A)
    dp = [[-1] * (n + 1) for _ in range(n)]
    return cutting_rod(n - 1, n, A, dp)

def cutting_rod(i, length, val, dp):
    if i < 0 or length == 0:
        return 0
    if dp[i][length] != -1:
        return dp[i][length]
    not_pick = cutting_rod(i - 1, length, val, dp)
    pick = 0
    piece_length = i + 1
    if piece_length <= length:
        pick = cutting_rod(i, length - piece_length, val, dp) + val[i]

    dp[i][length] = max(not_pick, pick)
    return dp[i][length]

A = [1, 5, 2, 5, 6]
# A = [3, 4, 1, 6, 2]

print(solve(A))