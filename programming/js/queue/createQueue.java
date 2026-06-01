// Online Java Compiler
// Use this editor to write, compile and run your Java code online


class Queue{
    int []A;
    int f = -1;
    int r = -1;
    int size = 0;
    int N;
    
    Queue(int N){
        this.N = N;
        A = new int[N];
    }
    
    void push(int val){
        if(size == N) return;
        r = (r + 1) % N;
        A[r] = val;
        size++;
    }
    
    int remove(){
        if(size == 0) return -1;
        f = (f + 1) % N;
        int val = A[f];
        size--;
        return val;
    }
    
    int peek(){
        if(size == 0) return -1;
        int idx = (f + 1) % N;
        return A[idx];
    }
    
    int getSize(){
        return size;
    }
}

class Main {
    public static void main(String[] args) {
        Queue q = new Queue(4);
        q.push(1);
        q.push(2);
        q.push(3);
        q.remove();
        System.out.println(q.getSize());
        System.out.print(q.peek());
    }
}