class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
 
 
root = Node(1)
node1 = Node(2)
node2 = Node(3)
node3 = Node(4)
node4 = Node(5)
node5 = Node(6)

root.left = node1
root.right = node2

node1.left = node3
node1.right = node4

node3.left = node5

is_bal = 1

def find_height(root):
    global is_bal
    
    if root is None:
        return -1
    
    l_height = find_height(root.left)
    r_height = find_height(root.right)
    
    if abs(l_height - r_height) > 1:
        is_bal = 0
    
    return max(l_height, r_height) + 1

def solve(root):
    global is_bal
    is_bal = 1
    find_height(root)
    return is_bal
    
    
print(solve(root))
    
    
    
