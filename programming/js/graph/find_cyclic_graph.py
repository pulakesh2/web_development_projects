def traversal(A,B):
    graph = [[] for _ in range(A+1)]
    for i in range(len(B)):
        graph.append([])

    for i in range(len(B)):
        u = B[i][0]
        v = B[i][1]
        graph[u].append(v)

    vis = [False for _ in range(A + 1)]
    path = [False for _ in range(A + 1)]


    # return 1 if dfs(1, A, graph, vis, path) else 0
    for i in range(A):
        if vis[i] == False:
            if dfs(i, graph, vis, path):
                return 1
    return 0

def dfs(src,graph, vis,path):
    vis[src] = True
    path[src] = True


    for nei in graph[src]:
        if path[nei] == True:
            return  1
        if not vis[nei]:
            if dfs(nei, graph, vis, path):
                return 1

    path[src] = False
    return 0


A = 5
B = [[1, 2],
     [2, 3],
     [3, 4],
     [4, 5]]

print(traversal(A,B))