import heapq


def solve(arr):
    min_heap = []
    max_heap = []
    result = [arr[0]]
    heapq.heappush(max_heap, -arr[0])

    for i in range(1, len(arr)):
        if arr[i] <= -max_heap[0]:
            heapq.heappush(max_heap, -arr[i])
        else:
            heapq.heappush(min_heap, arr[i])

        diff = abs(len(max_heap) - len(min_heap))
        if diff > 1:
            balance_heap(min_heap, max_heap)

        if len(max_heap) >= len(min_heap):
            result.append(-max_heap[0])
        # elif len(min_heap) > len(max_heap):
        else:
            result.append(min_heap[0])
        # else:
        #     result.append((-max_heap[0] + min_heap[0]) // 2)

    return result


def balance_heap(mini, maxi):
    if len(mini) > len(maxi):
        heapq.heappush(maxi, -heapq.heappop(mini))
    elif len(maxi) > len(mini):
        heapq.heappush(mini, -heapq.heappop(maxi))



A = [5, 17, 100, 11]
print(solve(A))