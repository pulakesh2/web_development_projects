
// print the pattern-->
// *****
// *   *
// *   *
// *****



public class q2 {
    public static void main(String args[]){
        int n=4,m=5;

        for(int i = 1; i<=n; i++){
            for(int j = 1; j<=m; j++){
                // cell --> (i,j)

                if(i == 1 || j == 1|| i == n || j == m ){
                    System.out.print("*");
                }
                else{
                    System.out.print(" ");
                }
            }

            // for the next line-->
            System.out.println("");

        }
    }
}
