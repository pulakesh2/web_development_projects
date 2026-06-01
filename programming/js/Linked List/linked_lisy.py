class Node:
    def __init__(self, val):
        self.val = val
        self.next = None


head = Node(1)
node1 = Node(2)
node2 = Node(3)
node3 = Node(4)
node4 = Node(5)

head.next = node1
node1.next = node2
node2.next = node3
node3.next = node4


# print the linked list
def print_linked_list(head):
    temp = head

    while temp != None:
        print(temp.val)
        temp = temp.next


# delete the node
def delete_node(head, value):
    while head.val == value:
        nh = head.next
        head.next = None
        head = nh

    temp = head

    while (temp != None and temp.next != None):
        if temp.next.val == value:
            temp.next = temp.next.next
        else:
            temp = temp.next
    return head


# reverse the linked list
def reverse_linked_list(head):
    temp = head
    prev = None

    while temp is not None:
        nn = temp.next
        temp.next = prev
        prev = temp
        temp = nn

    # head = prev
    return prev


value = 3

print_linked_list(head)

# print(f'after deleting node {value}')

# head = delete_node(head, value)
print('after reversing the linked list')
head = reverse_linked_list(head)
print_linked_list(head)
