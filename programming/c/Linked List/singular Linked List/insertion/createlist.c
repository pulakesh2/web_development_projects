#include<stdio.h>
#include<stdlib.h>
// create a node structure-->
struct node{
    // it holds the data and pointers of the next node-->
    int data;
    struct node*next;
};
struct node*start = NULL;
struct node*create_list(struct node*start){
   struct node*new_node,*ptr;
   int num;
   printf("to exit this loop please write -1\n");
   printf("write numbers:\n");
   scanf("%d",&num);
   while (num!=0)
   {
       if (start==NULL)
       {
           new_node->data = num;
           new_node->next = NULL;
       }
       else{
           ptr=start;
           while (ptr->next!=NULL)
           {
               ptr=ptr->next;
               ptr->next=new_node;
               new_node->next=NULL;
           }
           printf("\Enter the data: \n");
           scanf("%d",&num);
       }
       return start;
   }
   

}
int main(){
    // now allocate the memory-->
    start = create_list(start);
    printf("\n Linked list created");
    return 0; 
}