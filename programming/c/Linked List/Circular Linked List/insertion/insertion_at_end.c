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
struct node*insertion_at_end(struct node*head,int value){
    struct node*ptr = (struct node*)malloc(sizeof(struct node));
    struct node*new_node = (struct node*)malloc(sizeof(struct node));
    ptr = head;
    while (ptr->next!=head)
    {
        ptr = ptr->next;
    }
    new_node->data = value;
    ptr->next = new_node;
    new_node->next = head;
    return head;
    
}
int main(){
    int data;


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


    //take the value from the user which he/she want to insert-->
    printf("\nenter the value you want to enter at the end\n");
    scanf("%d",&data);


    // call the insertion function-->
    first = insertion_at_end(first,data);
    //show the new list to the user->

    
    printf("the new linked list-->");
    traversing(first,first);
    return 0;
}
