#include<stdio.h>

int main(){

    char name[20];
    int count = 0;


    printf("Enter your name --> ");
    fgets(name,20,stdin);


    for(int i = 1; name[i] != '\0'; i++){
        count++;
    }


    puts(name);
    printf("Length of the string is %d ", count);

    return 0;
}