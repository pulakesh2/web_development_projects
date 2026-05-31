#include<stdio.h>
#include<string.h>
int main(){
    char a[] = "hello";
    char b[] = "world";
    
    printf(" %s ", strcat(a,b));
   
    printf(" %d ", strlen(a));
    return 0;
}