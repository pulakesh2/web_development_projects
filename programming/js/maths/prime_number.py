def is_prime(num):
    i = 1
    count = 0
    while i * i <= num:
        if num % i == 0:
            if num / i == i:
                count += 1
            else:
                count += 2
        i += 1
    return count == 2


def find_prime_numbers(num):
    ans = []

    for i in range(2, num):
        if is_prime(i):
            ans.append(i)

    return ans


print(find_prime_numbers(24))