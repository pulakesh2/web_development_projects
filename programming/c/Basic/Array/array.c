#include<stdio.h>

int main(){
    int marks[3];

    for(int i = 0; i<3; i++){
        printf("Enter %d number -->", i);
        scanf("%d",&marks[i]);
    }



    printf("Your number is %d, %d, %d\n",marks[0],marks[1],marks[2]);


    int *ptr1 = &marks[0];
    int *ptr2 = &marks[1];

    printf("\n%u\n",ptr1);
    printf("%u",ptr2);
   
}