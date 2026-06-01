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

# for displaying the tree
def in_order(A):
    if A is None:
        return
    in_order(A.left)
    print(A.val)
    in_order(A.right)


        
# find min
def min(root):
    curr = root
    while curr.left is not None:
        curr = curr.left
    
    return curr.val
    
# find max
def max(root):
    curr = root
    while curr.right is not None:
        curr = curr.right
    
    return curr.val
    

in_order(root)

print(f"min element in the Btree : {min(root)}")
print(f"max element in the Btree: {max(root)}")