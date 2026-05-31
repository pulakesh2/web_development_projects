// Find type of website and the protocol used
// http://www.google.com
// type --> com & protocol --> http

import java.util.Scanner;

public class websiteProtocol {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.print("Please enter a website link --> ");

        String link = sc.next();
        int indexProtocol = link.indexOf(":");
        int indexType = link.indexOf(".");


        String protocol = link.substring(0, indexProtocol);
        String type = link.substring(indexType);

        if(protocol.equals("http")) System.out.println("Hyper Type transfer protocol");
        else if(protocol == "ftp") System.out.println("File transfer transfer protocol");

         System.out.println("Type of website " + type);
       
        

    }
}
