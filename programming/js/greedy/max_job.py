def solve(start, end):
    arr = []

    for i in range(len(A)):
        arr.append([A[i], B[i]])

    arr.sort(key=lambda x: x[1])

    job_count = 1
    curr_job = arr[0]

    for i in range(1,len(arr)):
        if arr[i][0] >= curr_job[1]:
            job_count += 1
            curr_job = arr[i]

    return job_count



A = [1, 5, 7, 1]
B = [7, 8, 8, 8]

print(solve(A,B))

