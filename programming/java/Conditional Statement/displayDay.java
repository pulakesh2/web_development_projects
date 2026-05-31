import java.util.Scanner;

// display name of day based on number-->
public class displayDay {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the Day Number --> ");

        int dayNumber = sc.nextInt();

        switch(dayNumber){
            case 1:
                System.out.println("It is monday");
                break;
            case 2: 
                System.out.println("It is tuesday");
                break;
            case 3:
                System.out.println("It is wednesday");
                break;
            case 4:
                System.out.println("It is Thursday");
                break;
            case 5:
                System.out.println("It is Friday");
                break;
            case 6:
                System.out.println("It is Saturday");
                break;
            case 7:
                System.out.println("It is Sunday");
                break;
            default:
                System.out.println("Please enter number between 1 to 7");

        }
    }
}
