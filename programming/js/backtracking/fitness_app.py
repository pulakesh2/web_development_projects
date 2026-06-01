def solve(str_, ans, vis):
    if len(ans) == len(str_):
        print("".join(ans))
        return

    for i in range(len(str_)):
        if not vis[i]:
            vis[i] = True
            ans.append(str_[i])
            solve(str_, ans, vis)
            vis[i] = False
            ans.pop()
solve('abc', [], [False,False, False])

