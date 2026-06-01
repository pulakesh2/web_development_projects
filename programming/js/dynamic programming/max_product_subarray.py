def solve(A):
    result = [0 for i in range(len(A))]

    for i in range(2,len(A)):
        result[i] = max_product(i, A)

    return  max(result)

def max_product(window_size, arr):
    ans = 0
    prod = 1
    for i in range(window_size):
        prod *= arr[i]
        ans = max(prod, ans)

    for i in range(window_size, len(arr)):
        if arr[i-window_size] == 0:
            return 0
        prod *= arr[i] / arr[i-window_size]
        ans = max(prod, ans)

    return ans


arr = [-3,0,-5,0]
print(solve(arr))