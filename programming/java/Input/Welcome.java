import java.util.Scanner;

class Welcome {
    public static void main(String args[]){
        String name;
        Scanner sc = new Scanner(System.in);

        System.out.println("What is your name");
        name = sc.next();

        System.out.println("Welcome Mr. " + name + " , we are very helpful");
    }
}