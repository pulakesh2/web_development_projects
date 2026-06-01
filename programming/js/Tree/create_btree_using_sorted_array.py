A = [5,10,15,20,25,30]



class Node:
  def __init__(self,val):
    self.val = val
    self.left = None
    self.right = None


def in_order(A):
  if A is None:
    return
  
  in_order(A.left)
  print(A.val)
  in_order(A.right)
  


def create(A,s,e):
  if s > e:
    return None
  
  mid = (s + e) // 2
  
  nn = Node(A[mid])
  nn.left = create(A, s, mid - 1)
  nn.right = create(A, mid + 1, e)
  
  return nn

def createBtree(A):
  s = 0
  e = len(A) - 1
  
  in_order(create(A,s,e))
  
  
createBtree(A)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  