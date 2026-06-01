def primesum(A):
    def prime_number(num):
        hashmap = {}

        for i in range(1, num + 1):
            hashmap[i] = i

        prime_numbers = []

        for i in range(2, num + 1):
            if hashmap[i] == i:
                prime_numbers.append(i)

                for j in range(i * i, num + 1, i):
                    if hashmap[j] == j:
                        hashmap[j] = i

        return prime_numbers

    prime_numbers = prime_number(A)

    ans = []
    low = 0
    high = len(prime_numbers) - 1
    ans = []

    while low <= high:
        if prime_numbers[low] + prime_numbers[high] == A:
            # ans.append([prime_numbers[low], prime_numbers[high]])
            # low += 1
            return [prime_numbers[low], prime_numbers[high]]
        elif prime_numbers[low] + prime_numbers[high] > A:
            high -= 1
        else:
            low += 1

    return ans[0]

print(primesum(16777214))