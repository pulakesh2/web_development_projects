#include<stdio.h>
#include<stdlib.h>


// create a structure which contain size of the stack and an array,top-->
struct stack{
    int size;
    int top;
    int *arr;
};



//create a function which tell us that stack is full or not-->
int isFull(struct stack*ptr){
    if (ptr->top == ((ptr->size)-1))
    {
        return 1;
    }
    else{
        return 0;
    }
}



//create a function which tell us that stack is empty or not-->
int isEmpty(struct stack*ptr){
    if (ptr->top == -1)
    {
        return 1;
    }
    else{
        return 0;
    }
}



// create a push function so that the element push to the stack-->
void push(struct stack*ptr,int data){
    //first see the stack is full or not-->
    if (isFull(ptr))
    {
        printf("stack is full\n");
    }
    else
    {
        //increment the top by 1-->
        ptr->top++;
        //now take the value from the user and store to the stack-->
        ptr->arr[ptr->top] = data;
        //confirmation message-->
        printf("\t\t%d is successfully added to the stack\n",data);
    }
}



// create a pop function so that the element push to the stack-->
void pop(struct stack*ptr){
    int val;
    //first see the stack is empty or not-->
    if (isEmpty(ptr))
    {
        printf("stack is empty\n");
    }
    else
    {
        //decrement the top by 1-->
        val = ptr->arr[ptr->top];
        ptr->top--;
        
        //confirmation message-->
        printf("\t\t%d is successfully removed from the stack\n",val);
    }
}



int main(){


    //declaration of some integer(for push)-->
    int size,exit,value;
    //for pop-->
    int remove;

    //allocate the memory-->
    struct stack*s1 = (struct stack*)malloc(sizeof(struct stack));


    //give the top value is -1 so that the stack is empty-->
    s1->top = -1;


    //take the size of the stack from the user-->
    printf("Enter the size of the array\n");
    scanf("%d",&size);
    s1->size = size;

    //create an array-->
    s1->arr = (int *)malloc(s1->size*sizeof(int));


    //now added the element to the stack-->
    printf("Create a stack-->\n");
    while (exit!=-1)
    {
        printf("enter the number(exit the list press -1)");
        scanf("%d",&exit);
        push(s1,exit);
        if (isFull(s1))
        {
            printf("stack is Full\n");
            break;
        }
    }

    
    //message-->
    printf("stack is created successfully\n");

    //create algorithm for removing element from the stack-->
    printf("to delete the element from the stack press -1(to exit press 1)\n");
    scanf("%d",&remove);


    //removing-->
    while (remove!=1)
    {
        pop(s1);
        printf("to delete the element from the stack press -1(to exit press 1)\n");
        scanf("%d",&remove);
        //see the stack is empty or not-->
        if (isEmpty(s1))
        {
            printf("stack is Empty\n");
            break;
        }
        
    }
    
    return 0;
}