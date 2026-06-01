# Problem Description
# You are given an array B of meeting time intervals where each interval is represented as [start, end] (with start < end).
# You need to find the minimum number of conference rooms required to host all the meetings.

# Input Format
# First Argument is an Integer A, denoting the number of meetings.
# Second Argument is a 2-D integer Array B of Size Ax2, representing the start and end timing of the meetings.
#
# Output Format
# Return a single integer representing the minimum number of conference rooms required.

import heapq
def solve(A, B):
    B.sort(key=lambda x: x[0])  # nlogn

    heap = []
    heapq.heapify(heap)

    heapq.heappush(heap, B[0][1])

    for i in range(1, A):  # n
        if B[i][0] >= heap[0]:
            heapq.heappop(heap)
            heapq.heappush(heap, B[i][1])
        else:
            heapq.heappush(heap, B[i][1])

    return len(heap)

A = 3
B = [ [0, 30],
      [5, 10],
      [15, 20] ]

print(solve(A, B))