#include<stdio.h>


struct Student
{
    int rollNo;
    char *name;
};

void printStudentDetails(struct Student *ptr){
    printf("Name is %s\n", ptr->name);
    printf("Roll No is %d\n", ptr->rollNo);


    ptr->name = "parthib";
}

int main(){
    struct Student s1 = { 20387 , "pulakesh"};
    printStudentDetails(&s1);


    printf("Name is %s\n", s1.name);
    return 0;
}
