def factorial(n):
    if n <= 1:
        return 1

    return n * factorial(n-1)

def num_of_arrange(arr):
    ans = 0
    mod = 1000003

    for i in range (len(arr)):
        ch_num1 = ord(arr[i])
        count = 0

        for j in range (i + 1, len(arr)):
            ch_num2 = ord(arr[j])
            if ch_num1 > ch_num2:
                count += 1
        ans += (count * factorial(len(arr) - 1 - i)) % mod
    return ans + 1

A = "yogi"

print(num_of_arrange(A))