// Print the pattern-->
// ****
// ***
// **
// *

public class q4 {
    public static void main(String args[]){
        int n =4;

        // row-->
        for(int i = n ; i >= 1; i--){

            // Column-->
            for(int j = 1; j <= i; j++){
                System.out.print("*");
            }

            System.out.println();
        }
    }
}
