#include<stdio.h>

struct rectangle{
    int length;
    int breadth;
};

int area(struct rectangle *ptr, int a, int b);
int main(){
    struct rectangle r;
    printf("area of the triangle is %d", area(&r,4,5));
    return 0;
}

int area(struct rectangle *ptr,int a, int b){
    ptr->length = a;
    ptr->breadth = b;
    return ptr->length * ptr->breadth;
}