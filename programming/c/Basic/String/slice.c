#include<stdio.h>
#include<string.h>


void slice(char str[], int n, int m){
    char newStr[100];
    int j = 0;
    for(int i = n-1; i<=m; i++,j++){
        newStr[j] = str[i];       
    }

    newStr[j] = "\0";

  
    puts(newStr);
}

int main(){


    char *word = "pulakesh";

   slice(word,5,8);
    return 0;
}