import java.util.Scanner;

public class areaTriangle {
    public static void main(String args[]){
        Scanner  sc = new Scanner(System.in);
        System.out.println("Enter the height of triangle");
        float height = sc.nextFloat();

        System.out.println("Enter the width of triangle");
        float width = sc.nextFloat();
        
        System.out.println("Area of the triangle is " + ((width*height)/2));

    }
}
