class orderStrin{
    public static void main(String[] args) {
        int x=10;
        float y=12.56f;
        char z='A';
        String str="Java Program";
          
        // order way-->
        System.out.printf("%2$f %3$s %1$d",x,y,str);
        System.out.println();
        System.out.printf("Hello %d %f %c %s\n",x,y,z,str);
        //%o,%x,%e for float value
        
    }
}