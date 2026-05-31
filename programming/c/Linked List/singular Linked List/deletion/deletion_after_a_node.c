#include<stdlib.h>
#include<stdio.h>


//create a structure which contain data and address of the next node-->
struct node{
    int data;
    struct node*next;
};


//create a function which show the linked list-->
struct node*traversing(struct node* ptr){
    while (ptr!=NULL)
    {
        printf(" %d ",ptr->data);
        ptr =ptr->next;
    }
    
}



//create a function which delete the first element of the linked list-->
struct node*deletion_after_a_node(struct node*head,int value){
    struct node*ptr = (struct node*)malloc(sizeof(struct node));
    struct node*preptr = (struct node*)malloc(sizeof(struct node));
    ptr = head;
    preptr = head->next;
    while (ptr->data!=value)
    {
        preptr = preptr->next;
        ptr = ptr->next;
    }
    ptr->next = preptr->next;
    free(preptr);
    return head;
}
int main(){
    int search;


    //allocate the memory-->
    struct node*first = (struct node*)malloc(sizeof(struct node));
    struct node*second = (struct node*)malloc(sizeof(struct node));
    struct node*third = (struct node*)malloc(sizeof(struct node));
    struct node*fourth = (struct node*)malloc(sizeof(struct node));
    struct node*new_node = (struct node*)malloc(sizeof(struct node));


    //connect the linked list to one another-->
    first->next = second;
    second->next = third;
    third->next = fourth;
    fourth->next = NULL;


    // take the value from the user-->
    printf("enter the first element\n");
    scanf("%d",&first->data);
    printf("enter the second element\n");
    scanf("%d",&second->data);
    printf("enter the third element\n");
    scanf("%d",&third->data);
    printf("enter the fourth element\n");
    scanf("%d",&fourth->data);
    printf("the current linked list-->");


    //show the linked list-->
    traversing(first);

    //take the value from the user-->
    printf("\nafter which element you want to delete\n");
    scanf("%d",&search);

    //create another node-->
    deletion_after_a_node(first,search);


    //show the new list-->
    printf("\nthe new linked list--> ");
    traversing(first);
    return 0;
}
