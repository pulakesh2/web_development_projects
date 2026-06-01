def solve(num):
    five_square = 1
    idx = 1
    while five_square <= num:
        five_square *= 5
        idx += 1
    max_el = five_square // 5

    count = 0
    while num >= 5:
        multiplier = num // max_el
        count += multiplier
        num = num - max_el * multiplier
        print(num)
        max_el = max_el // 5
        print(count ,multiplier, num, max_el)

    return count + num



A = 1055
print(solve(A))