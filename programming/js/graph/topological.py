import heapq
def solve(A, B):
    vertices = [0 for _ in range(A + 1)]
    graph = [[] for _ in range(A + 1)]
    min_heap = []
    result = []

    for u, v in B:
        vertices[v] += 1
        graph[u].append(v)

    for i in range(1, A + 1):
        if vertices[i] == 0:
            heapq.heappush(min_heap, i)

    while min_heap:
        rem = heapq.heappop(min_heap)
        result.append(rem)
        for nei in graph[rem]:
            vertices[nei] -= 1
            if vertices[nei] == 0:
                heapq.heappush(min_heap, nei)

    return result


A = 3
B = [[1, 2],
     [2, 3],
     [3, 1]]

print(solve(A, B))