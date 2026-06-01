def solve(a,b,c):
    capacity = a
    value = b
    weight = c
    n = len(value)
    dp = [[-1] * (capacity + 1) for _ in range(n)]
    return maximum_capacity( len(value) - 1, capacity, weight, value, dp)


def maximum_capacity( i, capacity, wt, val, dp):
    if i < 0 or capacity == 0:
        return 0

    if dp[i][capacity] != -1:
        return dp[i][capacity]

    rej = maximum_capacity( i - 1, capacity, wt, val, dp)
    sel = 0
    if wt[i] <= capacity:
        sel = maximum_capacity(i , capacity - wt[i], wt, val, dp) + val[i]

    dp[i][capacity] = max(rej, sel)
    return dp[i][capacity]



A = 10
B = [5]
C = [10]
print(solve(A,B,C)) #