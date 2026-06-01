# travel and change problem

class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
    
# create nodes
root = Node(10)
node1 = Node(4)
node2 = Node(6)
node3 = Node(6)
node4 = Node(6)

# create tree
root.left = node1
root.right = node2

node1.left = node3
node1.right = node4

ans = False


# get tree sum
def sum(root):
    if root is None:
        return 0
    l = sum(root.left)
    r = sum(root.right)

    return l + r + root.val

# get tree sum but check also
def subsum(root, half_sum):
    global ans

    if root is None:
        return 0
    l = subsum(root.left, half_sum)
    r = subsum(root.right, half_sum)

    if l is half_sum or r is half_sum:
        ans = True

    return l + r + root.val


# actual main function
def solve(root):

    tree_sum = sum(root)

    if (tree_sum % 2) != 0:
        return False

    subsum(root, int(tree_sum / 2))

    return ans


print(solve(root))






