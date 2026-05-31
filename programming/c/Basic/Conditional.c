#include<stdio.h>

int main(){
    int age;
    printf("Enter your age --> ");
    scanf("%d",&age);

    if(age >= 18) printf("You can drive the car");
    else if(age < 18 && age > 0) printf("you can't drive the car");
    else printf("wrong age");


    // age > 18 ? printf("you can") : printf("you can't");

    return 0;
}