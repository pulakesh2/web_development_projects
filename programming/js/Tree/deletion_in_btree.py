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


def max(root):
    curr = root
    while curr.right is not None:
        curr = curr.right
    
    return curr.val

def delete(root,k):
    if root is None:
        return root
    if k > root.val:
        root.right = delete(root.right, k)
    elif k < root.val:
        root.left = delete(root.left, k)
    else:
        if root.left == None and root.right == None:
            return None
        elif root.left is not None and root.right is None:
            return root.left
        elif root.right is not None and root.left is None:
            return root.right
        else:
            max_el = max(root.left)
            root.val = max_el
            root.left = delete(root.left, max_el)
  
    return root
    
in_order(delete(root,15))
