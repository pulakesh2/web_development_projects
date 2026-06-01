def solve(A):
    MOD = 10000003

    positions = []
    for i, ch in enumerate(A):
        if ch == 'x':
            positions.append(i)

    k = len(positions)
    if k <= 1:
        return 0

    adjusted = [positions[i] - i for i in range(k)]

    median = adjusted[k // 2]

    ans = 0
    for val in adjusted:
        ans = (ans + abs(val - median)) % MOD

    return ans




A = '..x.x..x..x'
# A = "....x..xx...x.."
# A = "....xxx"
# A = '...xx.x.x.x.xx.xx.x....x.x'
print(solve(A))