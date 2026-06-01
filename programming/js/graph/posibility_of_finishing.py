import heapq
def solve(A, B, C):
    vertices = [0 for _ in range(A + 1)]
    graph = [[] for _ in range(A + 1)]
    min_heap = []
    count = 0
    #
    # for u, v in B:
    #     vertices[v] += 1
    #     graph[u].append(v)
    #
    # for u, v in C:
    #     vertices[v] += 1
    #     graph[u].append(v)
    for i in range(len(B)):
        vertices[C[i]] += 1
        graph[B[i]].append(C[i])



    for i in range(1, A + 1):
        if vertices[i] == 0:
            heapq.heappush(min_heap, i)

    if len(min_heap) == 0:
        return 0

    while min_heap:
        rem = heapq.heappop(min_heap)
        count += 1
        for nei in graph[rem]:
            vertices[nei] -= 1
            if vertices[nei] == 0:
                heapq.heappush(min_heap, nei)

    return 1 if count == A else 0


A = 2
B = [1, 2]
C = [2, 1]

print(solve(A, B, C))