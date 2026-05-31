import java.lang.*;
import java.util.Scanner;
class ReadKeyBoard {
    public static void main(String args[]){

        // this is class for get input-->
        Scanner sc = new Scanner(System.in);
        int x,y;
        System.out.println("Enter two Numbers : ");
        // this is radix 2 means binary number-->
        sc.useRadix(2);

        // getting input from the user-->
        x = sc.nextInt();
        y =  sc.nextInt();

        // Showing data to the display-->
        System.out.println("The Two numbers are "+ x +","+ y);
        System.out.println("the sum of the numbers is " + (x+y));
     }
}
