import heapq

def solve(A, B):
    result = []
    heap = []
    heapq.heapify(heap)

    for i in range(B - 1):
        result.append(-1)
        heapq.heappush(heap, A[i])

    heapq.heappush(heap, A[B - 1])
    result.append(heap[0])

    for i in range(B, len(A)):
        # print(A[i], i)
        if A[i] > heap[0]:
            heapq.heappop(heap)
            heapq.heappush(heap, A[i])

        result.append(heap[0])


    return result


arr = [10, 18,7,5,16,19,3]
print(solve(arr, 3))