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
        
    def size(self):
        return len(self.values)



class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


# create nodes
root = Node(1)
node1 = Node(2)
node2 = Node(3)
node3 = Node(4)
node4 = Node(11)
node5 = Node(19)
node6 = Node(7)
node7 = Node(25)
node8 = Node(-3)
node9 = Node(45)


# build the tree
root.left = node1
root.right = node2
node1.left = node3
node1.right = node4
node3.left = node6
node4.right = node7
node2.right = node5
node5.left = node8
node5.right = node9

def breadth_first_traversal(root):
    q = Queue()
    q.enqueue(root)

    while(q.size() > 0):
        
        sz = q.size()
        
        for i in range(sz):
            rem = q.dequeue()
            print(f"{rem.val} ")
            if rem.left is not None: 
                q.enqueue(rem.left)
            if rem.right is not None:
                q.enqueue(rem.right)
    


breadth_first_traversal(root)