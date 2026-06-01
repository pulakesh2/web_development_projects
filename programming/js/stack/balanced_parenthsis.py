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


def balanced_paranthesis(char):
    for i in range(len(char)):
        c = char[i]
        
        if(c == '[' or c == '{' or c == '('):
            s.push(c)
        elif c == ']':
            if(s.size() > 0 and s.peek() == '['):
                s.pop()
            else:
                return False
        elif c == '}':
            if(s.size() > 0 and s.peek() == '{'):
                s.pop()
            else:
                return False
        elif c == ')':
            if(s.size() > 0 and s.peek() == ')'):
                s.pop()
            else:
                return False
    return s.size() == 0
    
char = "{{}[]}{{{{}"
print(balanced_paranthesis(char))