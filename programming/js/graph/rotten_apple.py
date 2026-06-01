from collections import deque


class Pair:
    def __init__(self, i, j,t):
        self.i = i
        self.j = j
        self.time = t

def solve(A):
    min_time = 0
    fresh = 0
    queue = deque()
    n = len(A)
    m = len(A[0])

    for i in range(len(A)):
        for j in range(len(A[i])):
            if A[i][j] == 1:
                fresh += 1
            elif A[i][j] == 2:
                queue.append(Pair(i,j,0))

    DR = [-1,0,1,0]
    DC = [0, -1,0,1]

    while len(queue) > 0:
        rem = queue.popleft()
        min_time = rem.time

        for i in range(4):
            nr = rem.i + DR[i]
            nc = rem.j + DC[i]

            if 0 <= nr < n and 0 <= nc < m and A[nr][nc] == 1:
                A[nr][nc] = 2
                queue.append(Pair(nr,nc,rem.time + 1))
                fresh -= 1
    if fresh == 0:
        return min_time
    else:
        return -1


A = [   [2, 1, 1],
        [0, 1, 1],
        [1, 0, 1]   ]

print(solve(A))