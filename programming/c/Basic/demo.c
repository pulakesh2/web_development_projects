#include<stdio.h>


int main(){
   
    int a,b;

    printf("Enter value a ->");
    scanf("%d", &a);
    printf("Enter value b ->");
    scanf("%d", &b);

    int c = a+b;
    printf("Sum of a and b is %d", c);
    return 0;
}