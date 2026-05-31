import java.util.Scanner;

public class Swapping {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);


        System.out.println("Enter the two numbers ");
        int a = sc.nextInt();
        int b = sc.nextInt();
        
        System.out.println("Before swapping, The Numbers are  " + a + "," + b);

        a =  a^b;
        b = a^b;
        a = a^b;

        System.out.println("After Swapping, The numbers are " + a + "," + b);
    }
}
