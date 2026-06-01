import heapq
def solve( A, B):
    heap = []
    # heapq.heapify(heap)
    result = []

    for i in range(B + 1):
        heapq.heappush(heap, A[i])

    for i in range(B + 1, len(A)):
        result.append(heapq.heappop(heap))
        heapq.heappush(heap, A[i])

    for i in range(B + 1):
        result.append(heapq.heappop(heap))

    return result


A = [25,16,11,31,28,20,3,8]
B = 6

print(solve(A, B))