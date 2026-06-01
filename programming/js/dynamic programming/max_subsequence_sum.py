def solve(A):
    dp = [-1] * len(A)

    return ms(A,0,dp)

def ms(A,i,dp):
    if i >= len(A):
        return 0
    if dp[i] != -1:
        return dp[i]

    pick = ms(A , i + 2, dp) + A[i]
    not_pick = ms(A, i + 1, dp)

    dp[i] = max(not_pick,pick)
    return dp[i]


A = [2,-1,-4,5,3,-1,4,2]
print(solve(A))