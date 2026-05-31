// question--> Find if the email id is on gmail and find username and domain name from gmail

import java.util.Scanner;

public class Challene1 {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter your Email -> ");
        String Email = sc.next();

        System.out.println("Your Email is " + Email);
        // System.out.println("Your Email is from gmail Answer-->  " + Email.matches(".*@gmail.*"))=
        
        int charIndex = Email.indexOf("@");

        String userName = Email.substring(0,charIndex);
        String domainName = Email.substring(charIndex+1);

        System.out.println("Your UserName is " + userName);
        System.out.println("Your domain name is " + domainName);

    }
}
