#include<stdio.h>



int sumOfN(int n){
    if(n==1) return 1;
    int sum = sumOfN(n-1);
    int sumNum = sum + n;
    return sumNum;
}

int main(){
    int n;
    printf("Enter a number");
    scanf("%d", &n);

    printf("The sum of the number from 0 to %d is %d", n, sumOfN(n));
}