def smallest_prime_factor(num):
    arr = [i for i in range(0,num + 1)]

    for i in range(2, num + 1):
        if arr[i] == i:
            for j in range(i**2, num + 1, i):
                if arr[j] == j:
                    arr[j] = i

    return  arr[2:]

print(smallest_prime_factor(10))
