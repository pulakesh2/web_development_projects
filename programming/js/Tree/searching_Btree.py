# create node class
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        

# create node
root = Node(15)
node1 = Node(10)
node2 = Node(5)
node3 = Node(1)
node4 = Node(8)
node5 = Node(21)
node6 = Node(27)
node7 = Node(24)
node8 = Node(34)


# create BTree
root.left = node1
root.right = node5

node1.left = node2

node2.left = node3
node2.right = node4

node5.right = node6

node6.left = node7
node6.right = node8


def search(A, k):
    if A is None:
        return False
    
    if A.val == k:
        return True
    elif k > A.val:
        return search(A.right, k)
    else:
        return search(A.left, k)
        
print(search(root,9))