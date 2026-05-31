#include <stdio.h>
#include <stdlib.h>


// create a tree structure-->
struct tree
{
    // tree has a data and the left child and right child-->
    int data;
    struct tree *left;
    struct tree *right;
    int height;
};



// create a function which allocate a memory fore a tree-->
struct tree *create(int data)
{
    struct tree *t = (struct tree *)malloc(sizeof(struct tree));
    t->data = data;
    t->left = NULL;
    t->right = NULL;
    t->height = 1;
    return t;
}


//create a get height function which returns height of the node-->
int getheight(struct tree*root){
    if (root == NULL)
    {
       return 0; 
    }
    else
    {
        return root->height;
    }
    
}


//create max function which returns the maximum of two numbers-->
int max(int a, int b){
    if (a>b)
    {
        return a;
    }
    else
    {
        return b;
    }
    
}


//create a BF fuction which returns the balanace factor of the node in AVL tree-->
int getBF(struct tree*root){
    if (root == NULL)
    {
        return 0;
    }
    else
    {
        return getheight(root->left) - getheight(root->right);
    }
    
}


//create a function which rotate the tree and give the root node(left direction)-->
struct tree*left_rotate(struct tree* y){
    struct tree*x = y->left;
    struct tree*T2 = x->right;

    
    
    x->right = y;
    y->left = T2;

    y->height = max(getheight(y->left),getheight(y->right));
    x->height = max(getheight(x->left),getheight(x->right));
    return x;
}
  



//create a function which rotate the tree and returns root node(right direction)-->
struct tree*right_rotate(struct tree* y){
    struct tree*x = y->right;
    struct tree*T2 = x->left;

    
    
    x->left = y;
    y->right = T2;

    y->height = max(getheight(y->left),getheight(y->right));
    x->height = max(getheight(x->left),getheight(x->right));
    return x;
}



//create an insert function which add new element to the AVL tree-->
struct tree*insert(struct tree*root,int data){

    // if root is equal to NULL returns create function-->
    if (root == NULL)
    {
        return create(data);
    }

    //if data is less than root data call insert left-->
    else if (data < root->data)
    {
       root->left = insert(root->left,data);
    }

    //if data is greater than root data call insert right--> 
    else
    {
        root->right = insert(root->right,data);
        
    }
    
    return root;
    //height udate-->
    root->height = 1 + max(getheight(root->left),getheight(root->right));
  
    //take BF of the node-->
    int BF = getBF(root);
    
    
    //                *****************ROTATION*************
    if (BF > 1 && data < root->left->data)
    {
        return right_rotate(root);
    }
    else if (BF < -1 && data > root->right->data)
    {
        return left_rotate(root);
    }
    else if (BF >1 && data>root->left->data)
    {
        root->left = left_rotate(root->left);
        return right_rotate(root);
    }
    else if (BF < -1 && data < root->right->data)
    {
        root->right = right_rotate(root->right);
        return left_rotate(root);
    }
    //             ****************ROTATION***************
    


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
int main()
{
    int data;
    

     // create the memory for every node for the tree-->
         struct tree*t1 = create(12);
         struct tree*t2 = create(9);
         struct tree*t3 = create(14);
         struct tree*t4 = create(5);
         struct tree*t5 = create(10);


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
            //  t4  t5            5  10

    

    //here the preOrder,Inorder and postOrder--->
    printf("\nthe preOrder of the tree---->");
    preOrder(t1);
    printf("\nthe inOrder of the tree---->");
    inOrder(t1);
    printf("\nthe postOrder of the tree---->");
    postOrder(t1);


    printf("\ninsert a node in the AVL tree-->");
    scanf("%d",&data);

    t1 = insert(t1,data);
    printf("\nafter inserting a new element");
    printf("\nthe inorder of the tree is-->");
    inOrder(t1);
    printf("\nthe preorder of the tree is-->");
    preOrder(t1);

    return 0;
}