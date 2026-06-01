import heapq

def dijkstar(A, B, C):
    graph = [[] for _ in range(A + 1)]

    for u, v, w in B:
        graph[u].append((v, w))
        graph[v].append((u, w))

    dis = [float('inf')] * (A)
    dis[C] = 0

    min_heap = []

    heapq.heappush(min_heap, (0, C))


    while min_heap:
        distance, vertex = heapq.heappop(min_heap)
        if distance > dis[vertex]:
            continue

        dis[vertex] = distance
        for nei,length in graph[vertex]:
            new_dist = distance + length
            if new_dist < dis[nei]:
                dis[nei] = new_dist
                heapq.heappush(min_heap, (new_dist, nei))

    return dis



A = 5
B = [   [0, 3, 4],
        [2, 3, 3],
        [0, 1, 9],
        [3, 4, 10],
        [1, 3, 8]  ]
C = 4
print(dijkstar(A, B, C))
