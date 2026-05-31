#include<stdio.h>

int swap(int a, int b);

int swapPtr(int *a, int *b);

int main(){
    int a = 10;
    int b = 20;
    swapPtr(&a,&b);
    printf("a is %d and b is %d", a,b);
    return 0;
}


int swap(int a, int b){
    int temp;
    temp = a;
    a = b;
    b = temp;
}

int swapPtr(int *a, int *b){
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;
}
