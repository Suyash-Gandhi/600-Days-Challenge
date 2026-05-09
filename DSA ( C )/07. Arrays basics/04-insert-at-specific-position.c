#include <stdio.h>

int main(){
    int arr[10] = {2,4,5,6,7};
    int pos=2;
    int ele=9;
    int size=5;

    for (int i = size; i >pos; i--)
    {
      arr[i] = arr[i-1];
     
    }
     arr[pos] = ele;
     size++;
     for(int i = 0; i <10; i++)
    {
        printf("%d ", arr[i]);
    }

    return 0;
}