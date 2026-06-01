def down_heapify(heap, index):
    while index * 2 + 1 < len(heap):
        smallest = min(
            (heap[index], index),
            (heap[2 * index + 1], 2 * index + 1),
            (heap[2 * index + 2], 2 * index + 2) if 2 * index + 2 < len(heap) else (float('inf'), -1)
        )[1]

        if smallest == index:
            break

        heap[index], heap[smallest] = heap[smallest], heap[index]
        index = smallest


def solve(heap):
    for i in range(len(arr) // 2 - 1, 0, -1):
        down_heapify(heap, i)

    return heap


import heapq

arr = [7, 3, 5, 1, 6, 8, 10, 2, 13, 14, 2, 7]

# heapq.heapify(arr)
print(solve(arr))