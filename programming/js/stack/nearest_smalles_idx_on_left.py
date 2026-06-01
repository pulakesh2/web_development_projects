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


def problem(arr):
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


arr = [8, 2, 4, 9, 7, 5, 3, 10]

print(problem(arr))


