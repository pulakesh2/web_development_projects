import java.util.Scanner;



// Q. Print all even numbers till n.
class evenNumber{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int n;

        System.out.println("Enter a name");
        n = sc.nextInt();

        for ( int i = 0; i < n ; i++ ){
            if(i%2 == 0)System.out.println( i + " is even"); 
        }
    }
}