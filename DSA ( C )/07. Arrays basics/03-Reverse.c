#include <stdio.h>
int main(){
    int arr[5] = {1,0,9,4,8};
      int size = sizeof(arr)/sizeof(arr[0]);
    int reverse[size];
    int j=0;
  
    for (int i = size-1; i >=0; i--)
    {
      reverse[j] = arr[i];
    j++;

    }
       
    for(int i = 0; i < size; i++)
    {
        printf("%d ", reverse[i]);
    }

 return 0;
}