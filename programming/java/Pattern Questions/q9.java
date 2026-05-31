// Print the pattern-->
// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1


public class q9 {
    public static void main(String args[]){

        int n = 5,binary = 1;

        // rows-->
        for(int i = 1; i <= n; i++ ){

            // column 
            for(int j = 1; j<=i; j++){

                // validation-->
                if((i + j)%2 == 0) binary = 1;
                else binary = 0;
                
                System.out.print(binary + " ");
               
            }
            System.out.println();
        }

    }
}
