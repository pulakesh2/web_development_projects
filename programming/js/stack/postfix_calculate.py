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


def postfix(char):
    for i in range(len(char)):
        ch = char[i]

        if (ch != '+') and (ch != '-') and (ch != '/') and (ch != '*'):
            stack.push(ch)
        else:
            b = int(stack.pop())
            a = int(stack.pop())
            if ch == '-':
                c = a - b
            elif ch == '*':
                c = a * b
            elif ch == '/':
                c = a / b
            else:
                c = a + b

            stack.push(c)

    return stack.peek()


char = '35+2-25*-'

print(postfix(char))






