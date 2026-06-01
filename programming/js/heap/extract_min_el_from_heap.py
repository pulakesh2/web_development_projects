
# def solve(arr):
#     swap(arr, 0, len(arr)-1)
#     small = arr.pop()
#     down_heapify(arr, 0)
#
#     return small
#
# def down_heapify(arr, i):
#     while 2 * i + 1 < len(arr):
#         smallest = min(arr[i], arr[2 * i + 1], arr[2 * i + 2])
#         if smallest == arr[i]:
#             return
#         elif smallest == arr[2 * i + 1]:
#             swap(arr, 2 * i + 1, i)
#             i = 2 * i + 1
#         elif smallest == arr[2 * i + 2]:
#             swap(arr, 2 * i + 2, i)
#             i = 2 * i + 2
#
# def swap(arr, i, j):
#     arr[i], arr[j] = arr[j], arr[i]
#
# A = [2,4,5,11,6,7,8,20,12]
# print(solve(A))
#
# USING HEAP

import heapq

def min_element(heap):
    heap[0], heap[-1] = heap[-1], heap[0]

    small = heap.pop()

    down_heapify(heap, 0)

    return heap

def down_heapify(heap, index):
    while index * 2 + 1 < len(heap):
        smallest = min(heap[index * 2 + 1], heap[index * 2 + 2], heap[index])

        if smallest == heap[index * 2 + 1]:
            heap[index * 2 + 1], heap[index] = heap[index], heap[index * 2 + 1]
            index = index * 2 + 1

        elif smallest == heap[index * 2 + 2]:
            heap[index * 2 + 2], heap[index] = heap[index], heap[index * 2 + 2]
            index = index * 2 + 2
        elif smallest == heap[index]:
            return


A = [2,4,5,11,6,7,8,20,12]
heapq.heapify(A)
print(min_element(A))
