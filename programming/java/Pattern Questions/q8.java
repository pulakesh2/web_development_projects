// print the floyed's triangle

// 1
// 2  3
// 4  5  6
// 7  8  9 10
//11 12 13 14 15


public class q8 {
    public static void main(String args[]){
        int n = 5,sum = 0;

        // Row-->
        for(int i = 1; i<=n; i++){
            // column-->
            for(int j = 1; j<=i; j++){
                sum++;
                System.out.print(sum + " ");
            }

            System.out.println();
        }

    }
}
