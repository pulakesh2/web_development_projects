def problem(arr):
    low = 0
    high = len(arr) - 1
    ans = 0

    while low < high:
        width = high - low
        height = min(arr[low], arr[high])
        ans = max(ans, height * (high - low))

        if arr[low] > arr[high]:
            high -= 1
        elif arr[high] >= arr[low]:
            low += 1

    return ans

A = [3,7,4,5,2]
print(problem(A))
