#include<stdio.h>

void swap(int *a , int *b){
    int p;

    p = *a;
    *a = *b;
    *b = p;

}


int main(){

    int a = 5;
    int b = 10;

    printf("Befor swap a-->%d & b-->%d\n",a,b);
    swap(&a, &b);
    printf("Befor swap a-->%d & b-->%d",a,b);

}