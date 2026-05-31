#include<stdio.h>
void your_details(int age,char* name){
    printf("your name is %s and your age is %d",name,age);
}
int main(){
    int age;
    char name[5];
    printf("what is your age\n");
    scanf("%d",&age);
    printf("what is your name\n");
    scanf("%s",&name);
    your_details(age,name);
    return 0;
}