# question : root to leaf path sum equal to k

class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        
# create the node 
root = Node(5)
node1 = Node(8)
node2 = Node(8)
node3 = Node(8)
node4 = Node(5)
node5 = Node(3)
node6 = Node(6)
node7 = Node(-10)
node8 = Node(1)

# create the tree
root.left = node1
root.right = node2

node1.left = node3
node1.right = node4

node2.left = node5
node2.right = node6

node6.left = node7
node6.right = node8

def sum_has_path(root, k):
    if root == None:
        return 0
        
    if root.left == None and root.right == None:
        if root.val == k:
            return 1
        else:
            return 0
            
    l = sum_has_path(root.left, k - root.val)
    r = sum_has_path(root.right, k - root.val)
    
    if(l == 1 or r == 1):
        return 1
    else:
        return 0
    
    
print(sum_has_path(root,-2))
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

