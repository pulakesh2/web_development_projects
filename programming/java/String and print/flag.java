public class flag {
    public static void main(string args[]){
        int a = 10;

        // width
        System.out.printf("%20d\n", a);
        // flag -
        System.out.printf("%-20d\n", a);
        // flag 0
        System.out.printf("%010d\n", a);
        // flag ( --> it only shows (a) when a is negative
        int b = -10;
        System.out.printf("%(d\n",b);
        
        // flag + --> it only shows +a when a is positive
        System.out.printf("%+d\n",a);

        // flag .
        float c = 123.45f;
        System.out.printf("%6.2f\n",c);

    }
}
