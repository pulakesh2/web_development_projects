def factorial(num):
    if num == 0:
        return 1
    sums = 1
    while num > 1:
        sums *= num
        num -= 1
    return sums


def combination(A, B, C):
    factorial_n = factorial(A)
    factorial_r = factorial(B)
    factorial_n_minus_r = factorial(A-B)

    



    return int((factorial_n/(factorial_n_minus_r * factorial_r)) % C)

print(combination(96, 21, 123))
