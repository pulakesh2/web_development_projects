def insert_in_heap(arr, num):
    arr.append(num)

    i = len(arr) - 1

    while i > 0:
        parent = (i - 1) // 2
        if arr[parent] > arr[i]:
            swap(arr, i, parent)
            i = parent
        else:
            break
    return arr


def swap(arr, i, j):
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp


A = [2, 4, 5, 11, 6, 7, 8, 20, 12]
B = 3

print(insert_in_heap(A, B))