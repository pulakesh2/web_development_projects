#include<stdio.h>

int main(){
    int a = 10;
    int *ptr = &a;

    printf("%p \n", ptr);
    printf("%p \n", &a);
}