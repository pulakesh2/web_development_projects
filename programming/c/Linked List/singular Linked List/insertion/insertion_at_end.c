#include<stdlib.h>
#include<stdio.h>

// create a structure which holds data and the address of the next node-->
struct node{
    int data;
    struct node*next;
};


//create a function which show the no of the element of the linked list-->
struct node*traversing(struct node* ptr){
    while (ptr!=NULL)
    {
        printf(" %d ",ptr->data);
        ptr =ptr->next;
    }
    
}


// create a function which add node at the end-->
struct node*insert_at_the_end(struct node*head,int data){
    struct node*ptr = (struct node*)malloc(sizeof(struct node));
    struct node*new_node = (struct node*)malloc(sizeof(struct node));
    ptr = head;
    while (ptr->next!=NULL)
    {
        ptr = ptr->next;
    }
    ptr->next = new_node;
    new_node->next = NULL;
    new_node->data = data;
    return head;
}
int main(){
    int search;


    //allocate the memory-->
    struct node*first = (struct node*)malloc(sizeof(struct node));
    struct node*second = (struct node*)malloc(sizeof(struct node));
    struct node*third = (struct node*)malloc(sizeof(struct node));
    struct node*fourth = (struct node*)malloc(sizeof(struct node));


    // connect the linked list to one another-->  
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


    //call the traverse function-->
    traversing(first);
    printf("\nenter the element you want to insert at the end\n");
    scanf("%d",&search);


    //call the insert function-->
    insert_at_the_end(first,search);

    
    // show the list-->
    printf("the new list is-->");
    traversing(first);
    return 0;
}
