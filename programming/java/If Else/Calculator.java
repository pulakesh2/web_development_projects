import java.util.Scanner;

public class Calculator{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int a,b,operation;

        System.out.println("Enter the two numbers-->");
        a =sc.nextInt();
        b =sc.nextInt();

        System.out.println("Choose a operation between 1 to 5");
        operation = sc.nextInt();



        switch(operation){
            case 1 : 
                System.out.println("The addition of two numbers is " +  (a + b));
                break;
            case 2 : 
                System.out.println("The difference between the numbers is " + (a - b));
                break;
            case 3 : 
                System.out.println("The Multiplication of the numbers is " + (a * b));
                break;
            case 4 :
                 System.out.println("The Division of the numbers is " + (a / b));
                 break;
            case 5 : 
                System.out.println("The Reminder of the numbers is " + (a % b));
                break;
            default : 
                System.out.println("Invalid number");
                break;
        }
    }
}