# def solve(A, B):
#     count = 0
#     compare(A,B, 0, count)
#     return count
#
# def compare(A,B, i, count):
#     if A == B:
#         count += 1
#     if i >= len(A):
#         return
#
#     compare(A[i], B, i + 1, count)
#     compare(A[:i] + A[i + 1:], B, i + 1, count)
#
def solve(A, B):
    return compare(A, B, 0)

def compare(A, B, i):
    if i >= len(A):
        return 1 if A == B else 0

    count1 = compare(A, B, i + 1)

    count2 = compare(A[:i] + A[i + 1:], B, i + 1)

    return count1 + count2

A = "abbc"
B = "abc"

print(solve(A, B))  # Output: 3


# A = "rabbbit"
# B = "rabbit"
#
# print(solve(A, B))
