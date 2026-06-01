from collections import deque


class Pair:
    def __init__(self,a,b,c):
        self.distance = a
        self.vertex = b
        self.parent = c

def min_cost(A, B,src, dest):
    max_nodes = A + len(B) + 1  # enough for virtual nodes
    graph = [[] for _ in range(max_nodes)]
    val = A + 1

    for i in range(len(B)):
        u = B[i][0]
        v = B[i][1]
        w = B[i][2]
        if w == 1:
            graph[u].append(v)
            graph[v].append(u)
        else:
            graph[u].append(val)
            graph[val].append(u)
            graph[v].append(val)
            graph[val].append(v)
            val += 1

    vis = [False for _ in range(max_nodes)]

    # return vis

    queue = deque()
    queue.append(Pair(0,src,src))
    vis[src] = True

    while len(queue) > 0:
        rem = queue.popleft()
        if rem.vertex == dest:
            return rem.distance

        for nei in graph[rem.vertex]:
            if not vis[nei]:
                vis[nei] = True
                queue.append(Pair(rem.distance + 1,nei, rem.parent))
    return  -1





A = 2
B = [   [0, 1, 1]
    ]
C = 0
D = 1

print(min_cost(A, B, C,D))