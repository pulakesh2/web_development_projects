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
    for i in range(len(arr)):
        ch = arr[i]

        if (stack.size() > 0 and stack.peek() == ch):
            stack.pop()
        else:
            stack.push(ch)


arr = 'abbd'

problem(arr)
print(stack.values)


