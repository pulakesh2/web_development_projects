// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.Arrays;
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
    public static int[] problem(int[] A,customStack stack){
        int[] arr = new int[A.length];
        for(int i = 0; i < A.length; i++){
            if(stack.size() == 0){
                arr[i] = -1;
                stack.push(i);
            }
            else{
                while(stack.size() > 0 && A[i] < A[stack.peek()]){
                    stack.pop();
                }
                if(stack.size() != 0) arr[i] = stack.peek();
                else arr[i] = -1;
                
                stack.push(i);
            }
        }
        
        return arr;
    }
    public static void main(String[] args) {
        // int[] A = {4,5,2,10,3,12};
        int[] A = {8,2,4,9,7,5,3,10};
        customStack stack = new customStack(A.length);
        
        System.out.println(Arrays.toString(problem(A, stack)));

    }
}