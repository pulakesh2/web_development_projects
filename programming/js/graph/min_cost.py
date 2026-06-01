from collections import deque


class Pair:
    def __init__(self,a,b,c):
        self.distance = a
        self.vertex = b
        self.parent = c

def min_cost(src, A, B, dest):
    graph = [[] for _ in range(A + 1)]

    for i in range(len(B)):
        u = B[i][0]
        v = B[i][1]
        graph[u].append(v)
        graph[v].append(u)

    vis = [False for _ in range(A + 1)]

    # return vis

    queue = deque()
    for i in range(len(src)):
        queue.append(Pair(0,src[i],src[i]))
        vis[src[i]] = True

    while len(queue) > 0:
        rem = queue.popleft()
        if rem.vertex == dest:
            return print(f'minimum distance is {rem.distance}')

        for nei in graph[rem.vertex]:
            if not vis[nei]:
                vis[nei] = True
                queue.append(Pair(rem.distance + 1,nei, rem.parent))
    return  -1




src = [11,7,2]

graph = [
    [1,11],
    [11,6],
    [11,5],
    [5,4],
    [4,8],
    [8,7],
    [7,10],
    [10,13],
    [13,9],
    [9,3],
    [3,12],
    [2,3],
    [5,2]
]

print(min_cost(src = src, A = 13, B = graph, dest = 9))