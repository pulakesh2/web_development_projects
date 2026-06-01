from collections import deque

def dfs(A,dest, src):
    graph = [[] for _ in range(len(A) + 1)]
    for i in range(len(A)):
        if A[i] != i + 1:
            graph[A[i]].append(i + 1)

    vis = [False for _ in range(len(A) + 1)]
    queue = deque()

    queue.append(src)
    while queue:
        rem = queue.popleft()
        if rem == dest:
            return 1

        for nei in graph[rem]:
            if not vis[nei]:
                vis[nei] = True
                queue.append(nei)

    return 0


A = [1, 1, 2]
B = 1
C = 2

print(dfs(A,B,C))