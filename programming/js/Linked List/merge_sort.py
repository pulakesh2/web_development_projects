class Node:
    def __init__(self, val):
        self.val = val
        self.next = None


first_node = Node(1)
node1 = Node(4)
node2 = Node(3)
node3 = Node(6)
node4 = Node(5)
node5 = Node(2)

first_node.next = node1
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5




def merge(h1, h2):
    if h1 is None:
        return h2
    if h2 is None:
        return h1

    head = None

    if h1.val <= h2.val:
        head = h1
        h1 = h1.next

    else:
        head = h2
        h2 = h2.next

    temp = head
    while h1 is not None and h2 is not None:
        if h1.val <= h2.val:
            temp.next = h1
            h1 = h1.next
        else:
            temp.next = h2
            h2 = h2.next

        temp = temp.next

    if h1 is not None:
        temp.next = h1

    if h2 is not None:
        temp.next = h2

    return head

def middle_element(node):
    # p1 is the slow
    p1 = node
    # p2 is the fast
    p2 = node

    while p2.next is not None and p2.next.next is not None:
        p2 = p2.next.next
        p1 = p1.next

    return p1


def merge_sort(h1):
    if h1 is None or h1.next is None:
        return h1

    mid = middle_element(h1)
    h2 = mid.next
    mid.next = None

    t1 = merge_sort(h1)
    t2 = merge_sort(h2)

    return  merge(t1, t2)

def print_linked_list(h):
    temp = h
    while temp is not None:
        print(temp.val)
        temp = temp.next


print_linked_list(merge_sort(first_node))