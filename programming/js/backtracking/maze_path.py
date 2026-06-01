def problem(a, b):
    ans = []
    solve(0, 0, a - 1, b - 1, '', ans)

    return ans

def solve(sr, sc, dr, dc, small,ans):
    if sr == dr and sc == dc:
        ans.append(small)
        return

    if sr + 1 <= dr:
        solve(sr + 1, sc, dr, dc, small + 'D',ans)

    if sc + 1 <= dc:
        solve(sr, sc + 1, dr, dc, small + 'R', ans)


print(problem(3,2))