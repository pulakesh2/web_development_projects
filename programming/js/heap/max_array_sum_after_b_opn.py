import heapq
def solve(arr, b):
    sum_max = 0
    heapq.heapify(arr)
    for i in range(b):
        smallest_el = heapq.heappop(arr)
        heapq.heappush(arr, smallest_el * (-1))

    for i in range(len(arr)):
        sum_max += arr[i]

    return sum_max

A =  [57, 3, -14, -87, 42, 38, 31, -7, -28, -61]

print(solve(A, b=10))
