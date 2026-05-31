// print the patter-->
//     *****      
//    *****
//   *****
//  *****
// *****


public class q10 {
    public static void main(String args[]){
        int n = 5;

        // row-->
        for(int i = 1; i<=n; i++){

            // column
            // space-->
            for(int k = n-i; k >= 1; k--){
                System.out.print(" ");
            }

            // star-->
            for(int j = 1; j<=n; j++){
                System.out.print("*");
            }

            // space-->
            for(int l = i-1; l<=n; l++){
                System.out.print(" ");
            }

            System.out.println();
        }
    }
}
