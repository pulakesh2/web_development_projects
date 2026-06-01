from inspect import k


def problem(arr, k):
    low = 0
    high = 1

    while low < len(arr) and high < len(arr):
        if arr[high] - arr[low] < k:
            high += 1
        elif arr[high] - arr[low] > k:
            low += 1
        else:
            return 1

    return  0

# 1 --> True
# 0 --> False

A = [-2,0,1,3,10,20,30]

print(problem(A,15))