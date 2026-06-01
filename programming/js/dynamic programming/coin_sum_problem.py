
def solve(A,B):
    MOD = 10**6 + 7
    dp = [0] * (B + 1)
    dp[0] = 1  # 1 way to make sum 0

    for coin in A:       # for each coin
        for j in range(coin, B + 1):   # for all sums >= coin
            dp[j] = (dp[j] + dp[j - coin]) % MOD

    return dp[B]


A = [1, 2, 3]
B = 4

print(solve(A, B))