#include <stdio.h>

int main(){
    int arr[]={100,24,3,40,5};
    int largest=0;
    int secondLargest=0;
    
    int size=sizeof(arr)/sizeof(arr[0]);
for (int i = 0; i < size; i++)
{
    if (arr[i] > largest)
    {
        largest=arr[i];
    }
    else if (arr[i] > secondLargest  && arr[i] < largest)
    {
       secondLargest=arr[i];
    }
    
    
}

printf("%d",secondLargest);

return 0;
}