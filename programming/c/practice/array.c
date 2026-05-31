#include<stdio.h>

void showArr(int *ptr);

int main(){
    int arr[] = {1,2,3,4,5};

    // for(int i = 0; i < 5; i++){
    //     printf(" %d ", arr[i]);
    // }
    showArr(arr);
 return 0;
}


void showArr(int *ptr){
    while(*ptr < 6){
        printf(" %d ",*ptr);
        ptr++;
    }
}
