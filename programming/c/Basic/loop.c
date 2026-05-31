#include<stdio.h>
int main(){
    int num;
    printf("Enter which table you want to see -->" );
    scanf("%d",&num);

    for(int i = 10; i>=1; i--) 
        printf("%d x %d = %d\n", num,i, i*num);
    

    return 0;
}