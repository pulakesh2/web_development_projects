import heapq
def solve(arr, b):
    heapq.heapify(arr)
    opn_el = heapq.heappop(arr)
    min_el = opn_el

    for i in range(b):
        heapq.heappush(arr, opn_el + min_el)
        print(arr)
        min_el = heapq.heappop(arr)

    return max(arr)

A = [1,2,3,4]
B = 10

print(solve(arr = A, b = B))