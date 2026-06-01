# Linked list using python

class Node:
    def __init__(self,data):
        self.data = data
        self.left = None
        self.right = None


# create the nodes
root = Node('a')
node1 = Node('b')
node2 = Node('c')
node3 = Node('d')
node4 = Node('e')
node5 = Node('f')
node6 = Node('g')
node7 = Node('f')


# create Tree
root.left = node1
root.right = node2
node1.left = node3
node1.right = node4
node4.left = node6
node2.right = node5


def in_order(root):
    if root == None:
        return
    print(f"{root.data} --> ")
    in_order(root.left)
    in_order(root.right)

    
in_order(root)
