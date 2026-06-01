import heapq
def mergeKLists(A):
    heap = []

    # push first node of each list
    for i, node in enumerate(A):
        if node:
            heapq.heappush(heap, (node.val, i, node))

    dummy = ListNode(0)
    tail = dummy

    while heap:
        val, i, node = heapq.heappop(heap)

        tail.next = node
        tail = node

        if node.next:
            heapq.heappush(heap, (node.next.val, i, node.next))

    return dummy.next