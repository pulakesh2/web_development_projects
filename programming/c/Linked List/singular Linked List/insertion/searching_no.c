#include<stdlib.h>
#include<stdio.h>
//create a structure name node which contain data and address of the next node-->
struct node{
    int data;
    struct node*next;
};
// create a search function which returns the no of element in the linked list-->
int search(struct node*ptr){
    int count=0;
    while (ptr!=NULL)
    {
        ptr = ptr->next;
        count++;
    }
    return count;
}
int main(){
    // alloacate the memory-->
    struct node*first = (struct node*)malloc(sizeof(struct node));
    struct node*second = (struct node*)malloc(sizeof(struct node));
    struct node*third = (struct node*)malloc(sizeof(struct node));
    struct node*fourth = (struct node*)malloc(sizeof(struct node));
    first->next = second;
    second->next = third;
    third->next = fourth;
    fourth->next = NULL;
    // takes the value of the node from the users-->
    printf("enter the first element\n");
    scanf("%d",&first->data);
    printf("enter the second element\n");
    scanf("%d",&second->data);
    printf("enter the third element\n");
    scanf("%d",&third->data);
    printf("enter the fourth element\n");
    scanf("%d",&fourth->data);
    // here we call the search function ehich returns the no of element in the linked list-->
    printf("the no of elements in the linked list is %d",search(first));
    return 0;
}
