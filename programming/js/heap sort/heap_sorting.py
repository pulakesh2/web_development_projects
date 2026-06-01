# import heapq


def solve(heap):
    result = []
    for i in range(len(heap)):
        heap[0], heap[-1] = heap[-1], heap[0]
        result.append(heap.pop())
        max_heap(heap)

    return  result

def max_heap(heap):
    for i in range(len(heap)//2 - 1, -1, -1):
        down_heapify(heap, i, len(heap)-1)

def down_heapify(heap, start, end):
    while 2 * start + 1 < end:
        get_max = max(heap[start], heap[start * 2 + 1], heap[start * 2 + 2])
        if get_max == heap[start]:
            return
        elif get_max == heap[2 * start + 1]:
            heap[start], heap[2 * start + 1] = heap[2 * start + 1], heap[start]
            start = start * 2 + 1
        elif get_max == heap[2 * start + 2]:
            heap[start], heap[2 * start + 2] = heap[2 * start + 2], heap[start]
            start = start * 2 + 2



A = []
# heapq.heapify(A)
print(solve(A))