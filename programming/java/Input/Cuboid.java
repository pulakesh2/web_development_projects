import java.util.Scanner;

public class Cuboid {
    public static void main(String args[]){
        int length,breath, height;
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the length,breath,height of the cuboid");

        length = sc.nextInt();
        breath = sc.nextInt();
        height = sc.nextInt();



        int frontBackArea = length * height;
        int rightLeftArea = breath * height;
        int topBottomArea = length * breath;
        int volume = length * breath * height;




        System.out.println("Total area of the cuboid is " + 2 * (frontBackArea + rightLeftArea + topBottomArea));
        System.out.println("The total volume of the cuboid is " + volume);

    }
}
