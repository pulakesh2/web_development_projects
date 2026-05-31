#include<stdlib.h>
#include<stdio.h>
struct node{
    int data;
    struct node*next;
};
struct node*traversing(struct node* ptr){
    while (ptr!=NULL)
    {
        printf(" %d ",ptr->data);
        ptr =ptr->next;
    }
    
}
int main(){
    struct node*first = (struct node*)malloc(sizeof(struct node));
    struct node*second = (struct node*)malloc(sizeof(struct node));
    struct node*third = (struct node*)malloc(sizeof(struct node));
    struct node*fourth = (struct node*)malloc(sizeof(struct node));
    first->next = second;
    second->next = third;
    third->next = fourth;
    fourth->next = NULL;
    printf("enter the first element\n");
    scanf("%d",&first->data);
    printf("enter the second element\n");
    scanf("%d",&second->data);
    printf("enter the third element\n");
    scanf("%d",&third->data);
    printf("enter the fourth element\n");
    scanf("%d",&fourth->data);
    traversing(first);
    return 0;
}
