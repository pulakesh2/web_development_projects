import heapq
def solve(A,B):
    heap = []
    heapq.heapify(heap)
    total = 0

    arr = []
    # create array of 2 D
    for i in range(len(B)):
        arr.append([A[i],B[i]])

    # sort based on expiry date
    arr.sort(key=lambda x: x[0])

    for deadline, profit in arr:
        heapq.heappush(heap, profit)
        total += profit

        if len(heap) > deadline:
            remove = heapq.heappop(heap)
            total -= remove

    return total



# A = [1,7,6,2,8,4,4,6,8,2]
# B = [8,11,7,7,10,8,7,5,4,9]
# A = [1, 3, 2, 3, 3]
# B = [5, 6, 1, 3, 9]
A = [3, 8, 7, 5]
B = [3, 1, 7, 19]

print(solve(A,B))