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
    for i in range(len(arr) - 1, -1, -1):

        while stack.size() > 0 and arr[i] > arr[stack.peek()]:
            stack.pop()
        if stack.size() == 0:
            ans.insert(0, -1)
        else:
            ans.insert(0, stack.peek())

        stack.push(i)

    return ans


arr = [4, 5, 2, 10, 3, 12]

print(problem(arr))


