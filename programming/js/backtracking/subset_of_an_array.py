def subset_of_an_array(arr):
    small = []
    ans = []
    solve(arr,ans, small, 0)

    return ans

def solve(arr, ans,small, idx):

    if idx == len(arr):
        # copy the small and store to ans
        ans.append(small.copy())
        return

    # left side pick
    small.append(arr[idx])
    # print(small)
    solve(arr, ans,small, idx+1)
    small.pop()

    # right side pick
    solve(arr, ans,small, idx+1)


A = [1,2,3,4]
print(subset_of_an_array(A))