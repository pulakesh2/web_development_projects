class Queue:
    def __init__(self):
        self.values = []
    def enqueue(self,x):
        self.values.append(x)
    def dequeue(self):
        front = self.values[0]
        self.values = self.values[1:]
        return front
    def size(self):
        return len(self.values)
    def peek(self):
        return self.values[0]
        
queue = Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.dequeue()

print(queue.size())
print(queue.peek())
        
