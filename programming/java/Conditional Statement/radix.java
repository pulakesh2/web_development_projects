public class radix {
    public static void main(String args[]){
        String srt = "01014390A";

        if(srt.matches("[01]+")) System.out.println("The radix is Binary");
        else if(srt.matches("[0-7]+")) System.out.println("The radix is octal");
        else if(srt.matches("[0-9]+")) System.out.println("The radix is Decimal");
        else if(srt.matches("[0-9A-F]+")) System.out.println("The radix is Hexadecimal");
        else  System.out.println("The number is not having Radix");
    }
    
}
