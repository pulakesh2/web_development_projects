def pascal_triangle(num):
    triangle = [[0] * num for _ in range(num)]

    for i in range(0, len(triangle)):
        j = 0
        while j <= i:
            if j == 0 and j == i:
                triangle[i][j] = 1
            else:
                triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]
            j += 1

    return triangle



pascal_triangle(5)
