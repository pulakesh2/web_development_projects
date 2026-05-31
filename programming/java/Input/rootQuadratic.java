import java.util.Scanner;

public class rootQuadratic {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);

        int a,b,c;
        double r1,r2;

        System.out.println("Please enter the three integer for quadratic equation ");
        a= sc.nextInt();
        b= sc.nextInt();
        c= sc.nextInt();

        double sqrt = b*b - 4*a*c;

        r1 = (-b + Math.sqrt(sqrt)) / (2*a);
        r2 = (-b - Math.sqrt(sqrt)) / (2*a);


        System.out.println("The root of the quadratic equation are "+ r1 + "," + r2);
    }
}
