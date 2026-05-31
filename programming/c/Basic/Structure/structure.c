#include<stdio.h>

struct student{
    char *name;
    int rollNo;
    int cgpa;
};


int main(){



   struct student CSE[10];

   CSE[0].name = "Pulakesh";
   CSE[0].cgpa = 8.1;
   CSE[0].rollNo = 20387;

   printf("Name is %s \n",CSE[0].name);
   printf("Roll No is %d \n",CSE[0].rollNo);
   printf("CGPA is %d \n",CSE[0].cgpa);

    return 0;
}