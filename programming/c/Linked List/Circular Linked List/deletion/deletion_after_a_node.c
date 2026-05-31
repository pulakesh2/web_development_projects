#include<stdlib.h>
#include<stdio.h>


// create struct node which contain data and address of the next node-->
struct node{
    int data;
    struct node*next;
};


//create the traversing function which show the list-->
struct node*traversing(struct node* ptr,struct node*head){
    while (ptr->next!=head)
    {
        printf(" %d ",ptr->data);
        ptr =ptr->next;
    }
    printf(" %d ",ptr->data);
}


//create a function which add to the begining of the linked list-->
struct node*deletion_after_a_element(struct node*head,int value){
    struct node*ptr = (struct node*)malloc(sizeof(struct node));
    struct node*preptr = (struct node*)malloc(sizeof(struct node));
    ptr = head;
    preptr = ptr->next;
    while (ptr->data!=value)
    {
        ptr = ptr->next;
        preptr = preptr->next;
    }
    ptr->next = preptr->next;
    free(preptr);
    return head;
}
int main(){
    int value;


    //allocate the memory-->
    struct node*first = (struct node*)malloc(sizeof(struct node));
    struct node*second = (struct node*)malloc(sizeof(struct node));
    struct node*third = (struct node*)malloc(sizeof(struct node));
    struct node*fourth = (struct node*)malloc(sizeof(struct node));


    //linked the node to one another-->
    first->next = second;
    second->next = third;
    third->next = fourth;
    fourth->next = first;


    //take the value from the user-->
    printf("enter the first element\n");
    scanf("%d",&first->data);
    printf("enter the second element\n");
    scanf("%d",&second->data);
    printf("enter the third element\n");
    scanf("%d",&third->data);
    printf("enter the fourth element\n");
    scanf("%d",&fourth->data);

    
    //show the list-->
    printf("the current linked list-->");
    traversing(first,first);


    // take the element so that the node will be deleted after that element-->
    printf("\nenter the value after which element the node will delete\n");
    scanf("%d",&value);



    // call the deletion function-->
    first = deletion_after_a_element(first,value);
    //show the new list to the user->

    
    printf("the new linked list-->");
    traversing(first,first);
    return 0;
}
