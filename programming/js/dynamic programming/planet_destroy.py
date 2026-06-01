def solve(A):
    MOD = 1000000007
    dp = [[-1] * (A + 1) for _ in range(2)]
    left = signal(1,A - 1, dp) # OFF = 1
    right = signal(0, A - 1, dp) # ON = 0
    return (left + right) % MOD

def signal(msg, c, dp):
    MOD = 1000000007
    if c == 0:
        return 1
    if dp[msg][c] != -1:
        return dp[msg][c]

    left = 0
    if msg != 0:
        left = signal(0, c - 1, dp)
    right = signal(1, c - 1, dp)

    dp[msg][c] = (left + right) % MOD
    return dp[msg][c]

print(solve(224))