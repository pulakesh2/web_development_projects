#include<stdlib.h>
#include<stdio.h>
struct node{
    int data;
    struct node*next;
};
// create a searching an element function-->
int searching_an_element(struct node*ptr,int data){
    int count = 0;
    struct node*search=(struct node*)malloc(sizeof(struct node));
    search = ptr;
    while (search->data!=data)
    {
        search = search->next;
        count++;
    }
    return count;
}

int main(){
    int search;
    // alloacate the memory-->
    struct node*first = (struct node*)malloc(sizeof(struct node));
    struct node*second = (struct node*)malloc(sizeof(struct node));
    struct node*third = (struct node*)malloc(sizeof(struct node));
    struct node*fourth = (struct node*)malloc(sizeof(struct node));
    //linked the node to one another-->
    first->next = second;
    second->next = third;
    third->next = fourth;
    fourth->next = NULL;
    // takes the value from the users-->
    printf("enter the first element\n");
    scanf("%d",&first->data);
    printf("enter the second element\n");
    scanf("%d",&second->data);
    printf("enter the third element\n");
    scanf("%d",&third->data);
    printf("enter the fourth element\n");
    scanf("%d",&fourth->data);
    //take the element from the user which he/she want to search-->
    printf("please enter the element you want to search\n");
    scanf("%d",&search);
    //print the element and the position of the element-->
    printf("so the element is %d and in the position of %d",search,searching_an_element(first,search)+1);
    return 0;
}
