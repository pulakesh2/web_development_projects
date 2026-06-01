def problem(num):
    ans = []
    small = []
    solve(num, small, ans)
    return ans

def solve(d, small, ans):
    if d == 0:
        ans.append(small.copy())
        return

    if d > 0:
        # left side --> going 1 stair
        small.append(1)
        solve(d - 1, small, ans)
        small.pop()

        # right side --> going 2 stair
        small.append(2)
        solve(d - 2, small, ans)
        small.pop()

print(problem(4))