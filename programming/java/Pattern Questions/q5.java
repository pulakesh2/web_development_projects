// print the pattern-->
//    *
//   **
//  ***
// ****


public class q5 {
    public static void main(String args[]){
        int n = 4;

        // row-->
        for(int i = 1; i<=n; i++){
            // Column-->
            // Space-->
            for(int k=1; k<=n-i;k++){
                System.out.print(" ");
            }

            // Star-->
            for(int j = 1; j<=i; j++){
                System.out.print("*");
            }

            // space-->
            System.out.println();
        }
    }
}
