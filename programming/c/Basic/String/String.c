#include<stdio.h>

int main(){

    // char name[50];
    // printf("Enter your name --> ");
    // scanf("%s", name);
    // printf("your name is %s ", name);

    char str[10];

    fgets(str,10,stdin);
    
    printf("your Data is ");
    puts(str);
    
    
    return 0;
}