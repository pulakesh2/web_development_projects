#include<stdio.h>


void reverseArray(int *arr,  int n){
    for(int i = 0; i<=n/2; i++){
        int firstValue = arr[i];
        int lastValue = arr[n-i-1];

        arr[i] = lastValue;
        arr[n-i-1] = firstValue;
    }
}

void printArray(int *arr,int n){
    for(int i = 0; i<n ; i++){
        printf("%d \t", arr[i]);
    }
}


int main(){
    int arr[] = {1,2,3,4,5};
     
     printf("Befor revese --> ");
     printArray(arr,5);

     reverseArray(arr,5);

     printf("\nAfter revese --> ");
     printArray(arr,5);
     
    return 0;
}