#include<iostream>

using namespace std;

class rectangle{
    private:
        int length;
        int breadth;
    public:
        void rectangle::initialize(int l, int b){
            length = l;
            breadth = b;
        }
        void rectangle::display(){
            cout<<"length is "<<length<<" breadth is "<<breadth;
        }

}

int main(){
   rectangle r;
   r.initialize(2,4);
   cout<<r.display();
    return 0;
}