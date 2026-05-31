#include<stdio.h>

// void display(int *arr, int max);

// int fibonacci(int n);

struct student{
    int a,b;
};

void change(struct student *ptr);

int main(){
    struct student s = {1,2};
    struct student *ptr = &s;

    printf("value of a is %d and b is %d",s.a,s.b);
    change(ptr);
    printf("\nvalue of a is %d and b is %d",s.a,s.b);

   return 0;
    
}

void change(struct student *ptr){
    int temp = ptr->a;
    ptr->a = ptr->b;
    ptr->b = temp;
}




// void display(int *arr,int max){
//     for(int i = 0; i<max; i++) printf(" %d ", arr[i]);
// }


// int fibonacci(int n){
//     // int sum;
//     if(n==0 || n==1) return n;
//     else  return fibonacci(n-1) + fibonacci(n-2);

//     // return sum;
// }