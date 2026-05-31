#include<stdlib.h>
#include<stdio.h>


// create a structure which contain data and address of the next node-->
struct node{
    int data;
    struct node*next;
};


// create a traversing function which show every element of the list-->
struct node*traversing(struct node* ptr){
    while (ptr!=NULL)
    {
        printf(" %d ",ptr->data);
        ptr =ptr->next;
    }
    
}


// create a function which insert element at the begining-->
struct node*insert_at_thebegin(struct node*head,int data){
    struct node*ptr = (struct node*)malloc(sizeof(struct node));
    ptr->data = data;
    ptr->next = head;
    return ptr;
}


int main(){
    int search;

    // allocate the memory-->
    struct node*first = (struct node*)malloc(sizeof(struct node));
    struct node*second = (struct node*)malloc(sizeof(struct node));
    struct node*third = (struct node*)malloc(sizeof(struct node));
    struct node*fourth = (struct node*)malloc(sizeof(struct node));


    // linked the list to one another-->
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


    // call the traversing function-->
    traversing(first);


    //take the element from the user-->
    printf("\nenter the element you want to insert at the begin\n");
    scanf("%d",&search);


    // create a node which we will insert at the begin-->
    struct node*newnode = (struct node*)malloc(sizeof(struct node));
    newnode = insert_at_thebegin(first,search);

    
    // after insertion new node is-->
    printf("after insertion the new list is--> \n");
    traversing(newnode);
    return 0;
}
