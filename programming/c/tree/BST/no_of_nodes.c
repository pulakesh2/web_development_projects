#include <stdio.h>
#include <stdlib.h>


// create a tree structure-->
struct tree
{
    // tree has a data and the left child and right child-->
    int data;
    struct tree *left;
    struct tree *right;
};



// create a function which allocate a memory fore a tree-->
struct tree *create(int data)
{
    struct tree *t = (struct tree *)malloc(sizeof(struct tree));
    t->data = data;
    t->left = NULL;
    t->right = NULL;
    return t;
}




//this is the preorder traversal which returns the preorder of the tree-->
void preOrder(struct tree *T)
{

    // here if tree root element is not NULL then print the below code-->
    if (T != NULL)
    {
        // print the data of the tree node-->
        printf(" %d ", T->data);
        preOrder(T->left);
        preOrder(T->right);
    }
}


void inOrder(struct tree *T)
{

    // here if tree root element is not NULL then print the below code-->
    if (T != NULL)
    {
        // print the data of the tree node-->
        inOrder(T->left);
        printf(" %d ", T->data);
        inOrder(T->right);
    }
}


void postOrder(struct tree *T)
{

    // here if tree root element is not NULL then print the below code-->
    if (T != NULL)
    {
        // print the data of the tree node-->
        postOrder(T->left);
        postOrder(T->right);
        printf(" %d ", T->data);
    }
}



// create a function which returns no of nodes-->
int no_of_tree(struct tree*root){
    // if root is equal to null then return 0;
    if (root==NULL)
    {
        return 0;
    }
    //if not then returns no of nodes preasent in the tree-->
    else
    {
        return 1 + no_of_tree(root->left) + no_of_tree(root->right);
    }
    
}
int main()
{


     // create the memory for every node for the tree-->
    struct tree *t1 = create(12);
    struct tree *t2 = create(9);
    struct tree *t3 = create(14);
    struct tree *t4 = create(5);
    struct tree *t5 = create(16);


    // Linked the tree node to one another-->
    t1->left = t2;
    t1->right = t3;

    t2->left = t4;
    t2->right = t5;
            //            TREE

            //      t1               12
            //      /\               /\
            //    t2  t3            9  14
            //    /\               /\
            //  t4  t5            5  16

    

    //here the preOrder,Inorder and postOrder--->
    printf("\nthe preOrder of the tree---->");
    preOrder(t1);
    printf("\nthe inOrder of the tree---->");
    inOrder(t1);
    printf("\nthe postOrder of the tree---->");
    postOrder(t1);

    // print the no of nodes in the tree-->
    printf("\nthe no of nodes in the tree is %d",no_of_tree(t1));
    return 0;
}