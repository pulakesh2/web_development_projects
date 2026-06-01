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


def left_nearest_small(arr):
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


def right_nearest_small(arr):
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


def left_nearest_large(arr):
    ans = []
    for i in range(len(arr)):

        while stack.size() > 0 and arr[i] >= arr[stack.peek()]:
            stack.pop()
        if stack.size() == 0:
            ans.insert(0, -1)
        else:
            ans.insert(0, stack.peek())

        stack.push(i)
    return ans


def right_nearest_large(arr):
    ans = []
    for i in range(len(arr) - 1, -1, -1):

        while stack.size() > 0 and arr[i] >= arr[stack.peek()]:
            stack.pop()
        if stack.size() == 0:
            ans.insert(0, -1)
        else:
            ans.insert(0, stack.peek())

        stack.push(i)

    return ans


def max_min_sum(arr):
    left_n_s = left_nearest_small(arr)
    right_n_s = right_nearest_small(arr)

    left_n_l = left_nearest_large(arr)
    right_n_l = right_nearest_large(arr)

    sum = 0

    for i in range(len(arr)):
        l_small = left_n_s[i]
        r_small = right_n_s[i]

        l_big = left_n_l[i]
        r_big = right_n_l[i]

        contribution = ((i - l_small) * (r_small - i)) - ((i - l_big) * (r_big - i))

        sum += arr[i] * contribution

        return sum


arr = [1, 8, 3, 5, 4, 2, 11, 7]

print(max_min_sum(arr))



