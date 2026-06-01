# import math
# def count_no_of_factors(n):
#     count = 0
#     for i in range(1, int(math.sqrt(n)) + 1):
#         if n % i == 0:
#             if n / i == i:
#                 count += 1
#             else:
#                 count += 2
#     return count
#
#
# def count_divisors(arr):
#     result = []
#     for i in range(len(arr)):
#         count = count_no_of_factors(arr[i])
#         result.append(count)
#     return  result
#
# A = [1,2,3,6,4]
#
# print(count_divisors(A))

def getspf(num):
    arr = [i for i in range(0,num + 1)]

    for i in range(2, num + 1):
        if arr[i] == i:
            for j in range(i**2, num + 1, i):
                if arr[j] == j:
                    arr[j] = i

    return  arr



def smallest_prime_factor(A):
    spf = getspf(max(A))

    result = []
    for i in range(len(A)):
        val = A[i]
        ans = 1

        while val > 1:
            cnt = 0

            s = spf[val]

            while val % s == 0:
                val = int(val / s)
                cnt += 1
            ans = ans * (cnt + 1)

        result.append(ans)


    return result

A = [48,2,3,6,4]

print(smallest_prime_factor(A))