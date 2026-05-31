public class Method {
    public static void main(String args[]){
        // matching method-->
        String str = "abcac";
        // . --> single character
        System.out.println(str.matches("."));

        // [abc] means must start first char with a,b,c (single character)
        System.out.println(str.matches("[abc]"));

        // [^abc] means not a,b,c
        System.out.println(str.matches("[^abc]"));
        
        // [a-z0-9] means a to z or 0 to 9
        System.out.println(str.matches("[^abc]")); //if % then false

        // [a-z][0-9] means two character a to z and 0 to 9
        System.out.println(str.matches("[a-z][0-9]"));

        // a|b means a or b only allowed
        System.out.println(str.matches("a|b"));

        // \w means alphabet or digit
        System.out.println(str.matches("\\w"));

        // [abc]* means only have a,b,c in that character aabbccaa
        // [a-z]* means character must have a to z not having numbers or other special character
        //  * -> 0 or more time
        //  + -> one or more
        //  ? -> 0 or 1 time
        //  {X} -> x times
        //  {X,Y} -> between x and y times
        System.out.println(str.matches("[abc]*"));
        System.out.println(str.matches("[abc]{5}")); // for only 5length character


        String str1 = "parthib.malakar@gmail.com";
        // .*gmail.* means (any character 0 or more time)gmail(any character 0 or more time)
        System.out.println(str1.matches(".*gmail.*"));
        // System.out.println(str1.matches("\\w*@gmail.*"));
    }
}
