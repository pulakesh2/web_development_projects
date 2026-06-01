import heapq

def solve(arr):
    result = []
    heap = []
    product = 1
    heapq.heapify(heap)
    
    for i in range(2):
        result.append(-1)
        heapq.heappush(heap, arr[i])
        product *= arr[i]
    
    product *= arr[2]
    heapq.heappush(heap, arr[2])
    result.append(product)
    
    for i in range(3, len(arr)):
        if arr[i] > heap[0]:
            divisor = heapq.heappop(heap)
            product = int(product / divisor)
            heapq.heappush(heap, arr[i])
            product *= arr[i]

        result.append(product)
        
    return result


A = [11,5,6,2,8,10] # -1 -1 330 330 528 880
print(solve(A))