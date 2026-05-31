// Remove extra spaces from string
// Find number of letter in a string
// Remove Special character from a string
// Find number of word in a string


public class Challenge3 {
    public static void main(String args[]){

        String str = "  Hello World  ";

        // q1-->
        System.out.println("Remove Extra spaces from string " + str.trim());

        // q2--> \s means spaces
       str = str.replaceAll("\\s+", "");

        System.out.println("The length of the string " + str.length());


        // q3-->
        String str1 = "a$b!c^1&2*3";

        System.out.println(str1.replaceAll("[^a-zA-Z0-9]", ""));

        // q4-->
        String str3 = "Hi myself Pulakesh  Malakar";

        str3 = str3.replaceAll("\\s+", " ").trim();

        String words[] = str3.split("\\s");

        System.out.println(words.length);


    }
}
