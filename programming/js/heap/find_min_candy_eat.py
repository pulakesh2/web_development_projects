import heapq

def solve(arr,max_range):
    heapq.heapify(arr)
    eat = 0


    min_box = heapq.heappop(arr)

    while min_box <= max_range:
        eat += min_box // 2
        remaining_candy = min_box - ( min_box // 2 )
        if len(arr) > 0:
            heapq.heappush(arr, heapq.heappop(arr) + remaining_candy)
        else:
            break
        min_box = heapq.heappop(arr)

    return eat

A = [356, 667]
print(solve(A,8))