// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class customStack{
    int[] A;
    int ptr;
    
    customStack(int size){
        this.A = new int[size];
        this.ptr = -1;
    }
    
    int push(int val){
        if(A.length == ptr) return -1;
        ptr++;
        A[ptr] = val;
        return val;
    }
    
    int pop(){
        if(ptr == -1) return -1;
        int val = A[ptr];
        ptr--;
        return val;
    }
    
    int peek(){
        if(ptr == -1) return -1;
        int val = A[ptr];
        return val;
    }
    
    int size(){
        return ptr + 1;
    }
}


class Main {
    public static void main(String[] args) {
        customStack stack = new customStack(4);
        
        stack.push(1);
        stack.push(2);
        stack.push(3);
        System.out.println(stack.pop());
        System.out.println(stack.pop());
        stack.push(4);
        System.out.println(stack.peek());
        System.out.println(stack.size());
    }
}