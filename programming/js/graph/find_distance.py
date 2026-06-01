def solve(A,B):
    graph = [[] for _ in range(2*A)]
    val = A + 1

    # for u, v, w in B:
    #     graph[u].append([v,w])
    #     graph[v].append([u,w])

    for u, v, w in B:
        if w == 1:
            graph[u].append(v)
            graph[v].append(u)
        else:
            graph[u].append(val)
            graph[val].append(u)
            graph[v].append(val)
            graph[val].append(u)
            val += 1

    return graph


A = 3
graph = [
    [0,1,1],
    [0,2,1],
    [1,2,2]
]

print(solve(A,graph))