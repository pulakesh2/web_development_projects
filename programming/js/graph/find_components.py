

def find_components(A, B):
    graph = [[] for _ in range(A+1)]
    for i in range(len(B)):
        graph.append([])

    for i in range(len(B)):
        u = B[i][0]
        v = B[i][1]
        graph[u].append(v)
        graph[v].append(u)


    vis = [False for _ in range(A + 1)]
    # path = [False for _ in range(A + 1)]
    result = []
    for i in range(A):
        if not vis[i]:
            comp = []
            dfs(graph, i, vis, comp)
            comp.sort()
            result.append(comp)

    result.sort(key=lambda x: x[0])
    return result


def dfs(graph, src, vis, res):
    vis[src] = True
    res.append(src)

    for nei in graph[src]:
        if not vis[nei]:
            dfs(graph, nei, vis, res)


A= 5
B= [
     [0, 1],
     [2, 1],
     [3, 4]
   ]

print(find_components(A, B))