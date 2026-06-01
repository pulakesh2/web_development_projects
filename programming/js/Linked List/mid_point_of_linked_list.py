class Node:
    def __init__(self, val):
        self.val = val
        self.next = None


head = Node(1)
node1 = Node(2)
node2 = Node(3)
node3 = Node(4)
node4 = Node(5)
node5 = Node(6)
node6 = Node(7)

head.next = node1
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6


# fast and slow technique
def middle_element(node):
    # p1 is the slow
    p1 = node
    # p2 is the fast
    p2 = node

    while p2.next is not None and p2.next.next is not None:
        p2 = p2.next.next
        p1 = p1.next

    return p1.val


print(middle_element(head))