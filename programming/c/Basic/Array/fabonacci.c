#include<stdio.h>

int main(){

    int n;

    printf("enter sequence of fabonacci --> ");
    scanf("%d", &n);

    int fabonacci[n];

    fabonacci[0] = 0;
    fabonacci[1] = 1;

    for(int i = 2; i<=n; i++){
        fabonacci[i] = fabonacci[i-1]+fabonacci[i-2];
    }

  for(int i = 0; i<n; i++){
       printf("%d \t", fabonacci[i]);
    }

    return 0;
}