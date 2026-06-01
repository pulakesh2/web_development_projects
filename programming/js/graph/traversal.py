def traversal(A,B):
    graph = [[] for _ in range(A+1)]
    for i in range(len(B)):
        graph.append([])

    for i in range(len(B)):
        u = B[i][0]
        v = B[i][1]
        graph[u].append(v)

    # vis = [False for _ in range(len(B))]
    vis = [False for _ in range(A + 1)]

    return 1 if dfs(1, A, graph, vis) else 0

def dfs(src,A,graph, vis):
    vis[src] = True
    if src == A:
        return 1

    for nei in graph[src]:
        if not vis[nei]:
            if dfs(nei, A, graph, vis):
                return 1

    return 0

# A = 5
# B = [ [1, 2],
#         [4, 1],
#         [2, 4],
#         [3, 4],
#         [5, 2],
#         [1, 3] ]
A = 5
B = [  [1, 2],
        [2, 3],
        [3, 4],
        [4, 5] ]

print(traversal(A,B))