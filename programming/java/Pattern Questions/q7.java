// print the pattern

// 12345
// 1234
// 123
// 12
// 1

public class q7 {
    public static void main(String args[]){
        int n = 10;
        // row-->
        for(int i = n ;  i>=1; i--){

            // column-->
            for(int j = 1; j<=i; j++){
                System.out.print(j + " ");
            }
            
            System.out.println();
        }
    }
}
