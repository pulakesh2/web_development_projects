import java.util.Scanner;

// find the year is leap year or not-->
public class leapYear {
    public  static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the year -> " );
        int year = sc.nextInt();

        if(year % 4 == 0) System.out.println("The year is a leap year");
        else System.out.println("The year is not a leap year");
    }
}
