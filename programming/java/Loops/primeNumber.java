import java.util.Scanner;

public class primeNumber {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a Number");
        int n = sc.nextInt();

        int count = 0;

        if(n == 0 || n==1) count = 1;


        for(int i = 2; i <= n/2; i++){
            if(n % i == 0){
                count = 1;
                break;
            } 
            else count = 0; 
        }


        if(count == 0) System.out.println( n + " is a prime Number");
        else System.out.println( n + " is not a prime Number");

    }
}
