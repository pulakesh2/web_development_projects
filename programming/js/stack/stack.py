class stack:
    def __init__(self):
        self.values = []
    def push(self,x):
        self.values.append(x)
    def pop(self):
        return self.values.pop()
    def peek(self):
        return self.values[len(self.values) - 1]
    def size(self):
        return len(self.values)
        
s = stack()

s.push(1)
s.push(2)
s.push(3)


print(s.pop())
print(s.size())