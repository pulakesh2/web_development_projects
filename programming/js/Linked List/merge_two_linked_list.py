class Node:
    def __init__(self, val):
        self.val = val
        self.next = None


# list 1
head1 = Node(2)
node1 = Node(5)
node2 = Node(9)
node3 = Node(14)
node4 = Node(19)

head1.next = node1
node1.next = node2
node2.next = node3
node3.next = node4


# list 2
head2 = Node(3)
nod1 = Node(6)
nod2 = Node(10)
nod3 = Node(11)
nod4 = Node(12)

head2.next = nod1     
nod1.next = nod2
nod2.next = nod3
nod3.next = nod4


def merge_two_linked_list(h1, h2):
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


def print_linked_list(head):
    temp = head
    while temp is not None:
        print(temp.val)
        temp = temp.next


head3 = merge_two_linked_list(head1, head2)
print_linked_list(head3)

