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
    public static boolean balancedParanthesis(String str,customStack stack){
        for(int i = 0; i < str.length(); i++){
            char ch = str.charAt(i);
            if(ch == '(' || ch == '{' || ch == '['){
                stack.push(ch);
            }
            else if(ch == ')'){
                if(stack.peek() == '(') stack.pop();
                else return false;
            }
            else if(ch == '}'){
                if(stack.peek() == '{') stack.pop();
                else return false;
            }
            else if(ch == ']'){
                if(stack.peek() == '[') stack.pop();
                else return false;
            }
            
        }
        if(stack.size() == 0) return true;
        else return false;
    }
    public static void main(String[] args) {
        // String str = "()[()]{}";
        // String str = "(()}";
        // String str = "(}){";
        String str = "{[[]{}]}";
        customStack stack = new customStack(str.length());
        
        System.out.println(balancedParanthesis(str, stack));

    }
}