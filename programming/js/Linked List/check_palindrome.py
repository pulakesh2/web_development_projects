class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

head = Node(1)
node1 = Node(2)


head.next = node1

# node4.next = node5

def print_linked_list(node):
    temp = node
    while temp is not None:
        print(temp.val)
        temp = temp.next

def middle_element(node):
    # p1 is the slow
    p1 = node
    # p2 is the fast
    p2 = node

    while p2.next is not None and p2.next.next is not None:
        p2 = p2.next.next
        p1 = p1.next

    return p1


def check_palindrome(h1):
    if h1.next is None:
        return 1
    mid = middle_element(h1)
    h2 = mid.next
    mid.next = None


    h2 = reverse_linked_list(h2)

    return compare(h1, h2, mid)

def reverse_linked_list(h):
    if h is None:
        return None

    prev = None
    temp = h

    while temp is not None:
        then = temp.next
        temp.next = prev
        prev = temp
        temp = then


    return  prev

def compare(h1, h2, mid):
    # while h1 != mid and h1 != mid.next:
    while h2 is not None:
        if h1.val != h2.val:
            return 0
        h1 = h1.next
        h2 = h2.next
    return 1

print(check_palindrome(head))