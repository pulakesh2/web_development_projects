import heapq

def min_spanning_tree(A, B):
    ans = 0
    graph = [[] for _ in range(A + 1)]

    for u, v, w in B:
        graph[u].append((v, w))
        graph[v].append((u, w))

    vis = [False] * (A + 1)

    min_heap = []
    heapq.heappush(min_heap, (0, 1))   # (weight, vertex)

    while min_heap:
        weight, vertex = heapq.heappop(min_heap)

        if vis[vertex]:
            continue

        vis[vertex] = True
        ans += weight

        for nei, w in graph[vertex]:
            if not vis[nei]:
                heapq.heappush(min_heap, (w, nei))

    return ans


A = 3
B = [   [1, 2, 20],
        [2, 3, 17]  ]

print(min_spanning_tree(A, B))
