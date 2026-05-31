import java.util.Scanner;

public class marksLoop {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        
        
        int option;
        
        do{
            System.out.println("Enter a option 1 or o");
            option = sc.nextInt();

            if(option == 1){
                System.out.println("What is your marks on java ");
                int marks = sc.nextInt();

                if(marks >=90) System.out.println("This is good");
                else if(marks <= 89 && marks >= 60) System.out.println("This is also good");
                else System.out.println("This is Good as well");
            }else{
                return;
            }

            
        }while(option != 0);




    }
}
