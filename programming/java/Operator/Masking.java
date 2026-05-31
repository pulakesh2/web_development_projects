public class Masking {
    public static void main(String args[]){
        byte a = 9,b = 12, c;

        c = (byte)(a << 4);
        c = (byte)(c | b);

        // Now check the numbers are present or not-->
        
        System.out.println("the numbers is present or not -> " + ((c & 0b11110000)>>4)); // should be 9
        System.out.println("the numbers is present or not -> " + (c & 0b00001111)); // should be 12



    }
}
