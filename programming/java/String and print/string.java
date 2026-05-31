public class string {
    public static void main(String args[]){
        
        char c[] = {'h','e','l','l','o'};

        String str = new String(c,0,2);

        System.out.println(str);

        String str1 = "java"; 
        String str2 = "java";
        
        System.out.println(str1==str2); // same reference to pool
        
        
        String str3 = new String("java");
        System.out.println(str3==str2); // it shows false one is reference to heap another refer to pool



    }
}
