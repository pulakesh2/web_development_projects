#include<stdio.h>
#include<stdlib.h>
struct stack{
    int data;
    struct stack*next;
};


int isFull(struct stack*ptr){
    struct stack*p = (struct stack*)malloc(sizeof(struct stack));
    if (p==NULL)
    {
        return 1;
    }
}
struct stack*push(struct stack*top,int value){
    if (isFull(top))
    {
        printf("stack Overflow\n");
    }
    else
    {
        struct stack*n = (struct stack*)malloc(sizeof(struct stack));
        struct stack*nnext = (struct stack*)malloc(sizeof(struct stack));
        nnext = n->next;
        if (n==NULL)
        {
           n->next = NULL;
           n->data = value;
           top = n;
           return top;
        }
        else{
          n->next = nnext;
          n->data = value;
          top = n;
          return top;
        }
        
    } 
}

void traversing(struct stack*ptr){
    while (ptr != NULL)
    {
        printf("Element---> %d",ptr->data);
    }
    
}
int main(){
    int data,circle;
    printf("how many element you want to insert to the stack\n");
    scanf("%d",&circle);
    struct stack*top = (struct stack*)malloc(sizeof(struct stack));
    
    for (int i = 0; i < circle; i++)
    {
        printf("enter the element you want to insert to the stack\n");
        scanf("%d",&data);
        top = push(top,data);
    }
    
    traversing(top);
    
    
    
    
    return 0;
}