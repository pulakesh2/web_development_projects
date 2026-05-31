// Print the pattern-->
// 1
// 12
// 123
// 1234
// 12345



public class q6 {
    public static void main(String args[]){
        int n = 5;
        // row-->
        for(int i = 1; i <= n; i++){

            // Column-->
            for(int j = 1; j<=i; j++){
                System.out.print(j + " ");
            }

            // space-->
            System.out.println();
        }
    }
}
