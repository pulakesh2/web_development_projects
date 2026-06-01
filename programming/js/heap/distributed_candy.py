def solve(A):
    left_arr = [1]
    for i in range(1, len(A)):
        if A[i] > A[i-1]:
            left_arr.append(left_arr[i-1] + 1)
        else:
            left_arr.append(1)

    A.reverse()
    right_arr = [1]
    for i in range(1, len(A)):
        if A[i] > A[i - 1]:
            right_arr.append(right_arr[i - 1] + 1)
        else:
            right_arr.append(1)
    right_arr.reverse()


    total = 0
    for i in range(len(A)):
        total += max(left_arr[i], right_arr[i])

    return total


A = [1, 2,34,5,4,6]

print(solve(A))