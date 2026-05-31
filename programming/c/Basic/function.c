#include<stdio.h>

void printHello(){
    printf("hello");
}

int sumOfTwoNum(int a , int b){
    return a + b;
}

int main(){
    int a=4,b=5;
    printHello();
    printf("The sum of two numbers is %d", sumOfTwoNum(a,b));
    return 0;
}