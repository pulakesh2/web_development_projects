import java.util.Scanner;

public class areaTriangleSurface {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        float a,b,c;

        System.out.println("Please enter the length of three side of the triangle");

        a = sc.nextFloat();
        b = sc.nextFloat();
        c = sc.nextFloat();


        float surface  = (a+b+c)/2;
        
        double area = Math.sqrt(surface*(surface-a)*(surface-b)*(surface-c));


        System.out.println("The area of the rectangle is "+ area);
    }
}
