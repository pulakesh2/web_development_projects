#include<stdio.h>

int main(){
    int marks[5];

    int *ptr = marks;

    for(int i = 0; i<5; i++){
        printf("\n%d index-->" , i);

        scanf("%d", (ptr+i));
    }

    printf("\n");

    for(int i = 0;i<5;i++){
        printf("%d index is %d\n", i,*(ptr+i));
    }


}