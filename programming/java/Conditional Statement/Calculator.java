import java.util.Scanner;

public class Calculator {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        System.out.print( "Enter two Numbers --> ");
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();

        System.out.println("Enter option (ADD,DIV,MUL)");
        String option = sc.next(); 
        switch(option){
            case "ADD" : 
                System.out.println("Addition of two numbers "+ (num1+num2));
                break;
            case "DIV" :
                System.out.println("difference of two numbers "+ (num1-num2));
                break;
            case "MUL":
                System.out.println("Multiplication of two numbers "+ (num1*num2));
                break;
            default:
                System.out.println("Please enter valid option");
        }
    }
}
