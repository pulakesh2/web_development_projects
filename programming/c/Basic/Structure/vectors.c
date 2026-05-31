#include<stdio.h>

struct vector{
    int x_direction;
    int y_direction;
};

void sumOfVector(struct vector *v1, struct vector *v2, struct vector *sum){
    sum->x_direction = v1->x_direction + v2->x_direction;
    sum->y_direction = v1->y_direction + v2->y_direction;
}


int main(){

    struct vector v[2];
    struct vector sum = {0};

    for(int i = 0; i<2 ; i++){
        printf("Enter the vector directions for x and y -> "); 
        scanf("%d", &v[i].x_direction);
        scanf("%d", &v[i].y_direction);
    }

    sumOfVector(&v[0],&v[1], &sum);

    printf("sum of x and y axis are %d and %d", sum.x_direction,sum.y_direction);


    return 0;
}