#include<stdlib.h>
#include<stdio.h>


// create a structure-->
struct node{
    int data;
    struct node*next;
};


//create a function which show the list-->
struct node*traversing(struct node* ptr){
    while (ptr!=NULL)
    {
        printf(" %d ",ptr->data);
        ptr =ptr->next;
    }
    
}


//create a function which insert element after a given node-->
struct node*insert_before_a_node(struct node*head,int data,int value){
    struct node*ptr = (struct node*)malloc(sizeof(struct node));
    struct node*preptr = (struct node*)malloc(sizeof(struct node));
    struct node*new_node = (struct node*)malloc(sizeof(struct node));
    ptr = head;
    preptr = ptr->next;
    while (preptr->data != value)
    {
        preptr = preptr->next;
        ptr = ptr->next;
    }
    new_node->data = data;
    ptr->next = new_node;
    new_node->next = preptr;
    return head;
}
int main(){
    int value,element;


    //allocate the memory-->
    struct node*first = (struct node*)malloc(sizeof(struct node));
    struct node*second = (struct node*)malloc(sizeof(struct node));
    struct node*third = (struct node*)malloc(sizeof(struct node));
    struct node*fourth = (struct node*)malloc(sizeof(struct node));


    // linked the node to one another-->
    first->next = second;
    second->next = third;
    third->next = fourth;
    fourth->next = NULL;


    //take the value from the user-->
    printf("enter the first element\n");
    scanf("%d",&first->data);
    printf("enter the second element\n");
    scanf("%d",&second->data);
    printf("enter the third element\n");
    scanf("%d",&third->data);
    printf("enter the fourth element\n");
    scanf("%d",&fourth->data);
    printf("the current linked list -->");
    traversing(first);


    // take the value and the element which after the elemnt will insert-->
    printf("\nenter a element you want to insert\n");
    scanf("%d",&value);
    printf("before which element you want to insert\n");
    scanf("%d",&element);


    //call insert function-->
    first = insert_before_a_node(first,value,element);

    
    //show the list-->
    printf("the new linked list -->");
    traversing(first);
    return 0;
}
