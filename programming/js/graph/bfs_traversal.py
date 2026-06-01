from collections import deque


def bfs_traversal(A,B):
    graph = [[] for _ in range(A+1)]


    for i in range(len(B)):
        u = B[i][0]
        v = B[i][1]
        graph[u].append(v)
    vis = [False for _ in range(A + 1)]


    for i in range(len(B)):
        if not vis[i]:
            bfs(graph, i, vis)

def bfs(graph, src, vis):
    queue = deque()
    vis[src] = True
    queue.append(src)

    while len(queue) > 0:
        rem = queue.popleft()
        print(rem)
        for nei in graph[rem]:
            if not vis[nei]:
                vis[nei] = True
                queue.append(nei)

A= 4
B= [
     [0, 1],
     [1, 2],
     [1, 4],
    [2,3],
    [3,1]
   ]

print(bfs_traversal(A,B))