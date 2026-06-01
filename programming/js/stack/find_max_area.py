class Stack:
    def __init__(self):
        self.values = []

    def push(self, val):
        self.values.append(val)

    def pop(self):
        return self.values.pop()

    def peek(self):
        return self.values[len(self.values) - 1]

    def size(self):
        return len(self.values)


stack = Stack()


def left_nearest(arr):
    ans = []
    for i in range(len(arr)):
        while stack.size() > 0 and arr[i] <= arr[stack.peek()]:
            stack.pop()
        if stack.size() == 0:
            ans.append(-1)
        else:
            ans.append(stack.peek())
        stack.push(i)

    return ans


s = Stack()


def right_nearest(arr):
    ans = []
    for i in range(len(arr) - 1, -1, -1):
        # print(i)
        while s.size() > 0 and arr[i] <= arr[s.peek()]:
            s.pop()
        if s.size() == 0:
            ans.insert(0, len(arr))
        else:
            ans.insert(0, s.peek())
        s.push(i)

    return ans


def max_area(arr):
    left = left_nearest(arr)
    right = right_nearest(arr)

    area = 0

    for i in range(len(arr)):
        height = arr[i]
        p1 = left[i]
        p2 = right[i]

        width = p2 - p1 - 1

        rect_area = height * width

        area = max(area, rect_area)

    return area


# arr = [3,2,5,7,4,6,5,2,3,1,5,6,4,3,5,6,4,1]
arr = [1, 2, 3, 2, 1]

print(max_area(arr))



