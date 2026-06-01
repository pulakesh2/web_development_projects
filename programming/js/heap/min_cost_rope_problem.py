import heapq


def min_cost(arr):
    cost = 0
    q = []
    for i in range(len(arr)):
        heapq.heappush(q, arr[i])

    while len(q) > 1:
        r1 = heapq.heappop(q)
        r2 = heapq.heappop(q)

        cost += r1 + r2

        heapq.heappush(q, r1 + r2)

    return cost


arr = [1, 2, 3, 4]

print(min_cost(arr))

# def min_cost(arr):
#     arr.sort()
#     sum = 0

#     while len(arr) > 1:
#         r1 = arr[0]
#         r2 = arr[1]

#         sum += r1 + r2

#         arr = arr[2:]

#         arr.append(r1 + r2)

#         arr.sort()
#         print(arr)

#     return sum

# arr = [1,2,3,4]
# print(min_cost(arr))

