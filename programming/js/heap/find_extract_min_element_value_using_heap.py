import heapq


def solve(A):
    heap = []
    result = []

    for i in range(len(A)):

        op1 = A[i][0]
        val = A[i][1]

        if op1 == 1:
            if len(heap) > 0:
                min_result = heapq.heappop(heap)
            else:
                min_result = -1

            result.append(min_result)
        elif op1 == 2:
            heapq.heappush(heap, val)

    return result


A = [[2, 5], [2, 3], [2, 1], [1, -1], [1, -1]]

print(solve(A))