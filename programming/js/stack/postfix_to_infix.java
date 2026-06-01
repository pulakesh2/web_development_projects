// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class customStack{
    int[] A;
    int ptr;
    
    customStack(int size){
        this.A = new int[size];
        this.ptr = -1;
    }
    
    void push(int val){
        if(A.length - 1 == ptr) System.out.println("stack overflow");
        ptr++;
        A[ptr] = val;

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
    public static int postIndex(String str,customStack stack){
        for(int i = 0; i < str.length(); i++){
            char ch = str.charAt(i);
            if(ch != '+' && ch != '-' && ch != '*' && ch != '/'){
                stack.push(ch - '0');
            }else{
                int b = stack.pop();
                int a = stack.pop();
                int val = 0;
                if(ch == '+') val = a + b;
                else if(ch == '-') val = a - b;
                else if(ch == '*') val = a * b;
                else if(ch == '/') val = a / b;

                stack.push(val);
            }
        }
        
        return stack.peek();
    }
    public static void main(String[] args) {
        // String str = "52*3-";
        String str = "35+2-25*-";
        customStack stack = new customStack(str.length());
        
        System.out.println(postIndex(str, stack));

    }
}