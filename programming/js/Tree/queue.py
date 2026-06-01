# queue using python

class Queue:
    def __init__(self):
        self.values = []
        
    def enqueue(self,x):
        self.values.append(x)
    def dequeue(self):
        front = self.values[0]
        self.values = self.values[1:]
        return front
        
    def result(self):
        return self.values
        

q = Queue()

q.enqueue(12)
q.enqueue(24)
q.enqueue(36)
q.dequeue()

print(q.result())