#include <stdio.h>

int main(){
   int arr[10] = {1,2,3,4,5};
   int delIndex=2;
   int size=5;
   for (int i = delIndex; i <size ; i++)
   {
    arr[i]=arr[i+1];
   }
   size--;

   for (int i = 0; i < size; i++)
   {
    printf("%d ",arr[i]);
   }
   
   
    return 0;
}