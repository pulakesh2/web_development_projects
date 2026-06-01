def solve(a,b,c):
    n = len(a)
    dp = [[-1] * (c + 1) for _ in range(n)]
    return maximum_capacity( len(a) - 1, c, b, a, dp)


def maximum_capacity( i, capacity, wt, val, dp):
    if i < 0 or capacity == 0:
        return 0

    if dp[i][capacity] != -1:
        return dp[i][capacity]

    rej = maximum_capacity( i - 1, capacity, wt, val, dp)
    sel = 0
    if wt[i] <= capacity:
        sel = maximum_capacity(i - 1, capacity - wt[i], wt, val, dp) + val[i]

    dp[i][capacity] = max(rej, sel)
    return dp[i][capacity]



A = [60, 100, 120]
B = [10, 20, 30]
C = 50

print(solve(A,B,C))