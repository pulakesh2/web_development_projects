// print the pattern
//     1     
//    2 2
//   3 3 3
//  4 4 4 4
// 5 5 5 5 5



public class q11 {
    public static void main(String args[]){
        int n = 5;
        // row-->
        for(int i = 1; i<=n; i++){
            // column-->
            // space
            for(int k = n-i; k>=1; k--){
                System.out.print(" ");
            }

            // numbers
            for(int j = n-i+1; j<=5; j++){
                System.out.print(i + " ");
            }

             // space
            for(int l = n-i; l>=1; l--){
                System.out.print(" ");
            }

            System.out.println();
        }
    }
}
