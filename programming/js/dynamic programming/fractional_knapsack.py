def solve(a, b,c):
    def pair(val, weight):
        return [val, weight]

    # create pair
    pair_arr = []
    for i in range(len(b)):
        pair_arr.append(pair(a[i], b[i]))

    # sort the array
    sort_arr(pair_arr)

    ans = 0
    for i in range(len(pair_arr)):
        if pair_arr[i][1] < c:
            ans += pair_arr[i][0]
            c -= pair_arr[i][1]
        else:
            fraction = (pair_arr[i][0] / pair_arr[i][1]) * 1.0 * c
            ans += fraction
            break

    return round(ans, 2)

def sort_arr(arr):
    arr.sort(key=lambda x: x[0] / x[1], reverse=True)


A = [10, 20, 30, 40]
B = [12, 13, 15, 19]
C = 10

print(solve(A,B,C))