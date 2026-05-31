#include<stdio.h>


int fibonacci(int n){
   
    if(n==0 ) return 0;
    else if(n==1) return 1;
    
    int fibonacciValue = fibonacci(n-1) + fibonacci(n-2);
 
    return fibonacciValue;
}

int main(){
    int a;
    printf("enter a number --> ");
    scanf("%d", &a);

    printf("fibonacci of %d term is--> \n", a);

    for(int i = 1; i<=a; i++){
        printf(" %d ",fibonacci(i));
    }

}