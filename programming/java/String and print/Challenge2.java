// Find if a Number is binary or not
// Find is a Number is Hexa-decimal or not
// Find is the data in Date format (dd/mm/yyyy)

public class Challenge2 {
    public static void main(String args[]){
        // binary or not-->
        // int num = 1010101111;
        String num = "01/12/2001";

        // q1-->
        // String strNum = String.valueOf(num);
        // System.out.println("The number is binary or not -> " + strNum.matches("[01]+"));
        
        // q2-->
        // System.out.println("The number is hexade cimal or not -> " + strNum.matches("[0-9A-F]+"));
        
        // q3-->
        System.out.println("The number is date or not -> " + num.matches("[0-3][0-9]/[0-1][0-9]/[0-9]{4}"));

    }
}
