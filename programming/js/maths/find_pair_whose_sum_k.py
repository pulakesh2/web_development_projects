
# if all element are distinct
def find_pair_whose_sum_k(arr, k):
    low = 0
    high = len(arr)-1

    while low < high:
        if arr[low] + arr[high] > k:
            high = high - 1
        elif arr[low] + arr[high] < k:
            low = low + 1
        else:
            return True

    return False

A = [1,3,5,10,20,23,30]
print(find_pair_whose_sum_k(A, 12))

# if duplicate element present

def count_pair_whose_sum_k(arr, k):
    low = 0
    high = len(arr)-1

    ans = 0

    while low < high:
        if arr[low] + arr[high] > k:
            high = high - 1
        elif arr[low] + arr[high] < k:
            low = low + 1
        else:

            if arr[low] == arr[high]:
                count = high - low + 1
                ans += int((count * (count - 1)) / 2)
                break

            count_h = 0
            h_num = arr[high]

            while low <= high and arr[high] == h_num:
                count_h += 1
                high = high - 1

            count_l = 0
            l_num = arr[low]

            while low <= high and arr[low] == l_num:
                count_l += 1
                low = low + 1

            ans += count_h * count_l

    return  ans

A = [1,10,11,23,45]

print(count_pair_whose_sum_k(A, 12))