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
struct node*deletion_at_the_begin(struct node*head){
    struct node*ptr = (struct node*)malloc(sizeof(struct node));
    ptr = head->next;
    free(head);
    return ptr;
}
int main(){


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

    //create another node-->
    new_node = deletion_at_the_begin(first);


    //show the new list-->
    printf("\nthe new linked list--> ");
    traversing(new_node);
    return 0;
}
