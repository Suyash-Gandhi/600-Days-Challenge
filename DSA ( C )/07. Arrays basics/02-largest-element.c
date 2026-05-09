#include <stdio.h>
int main(){
    int arr[]={1,5,3,6,8,4};
    int largest=0;
    for (int i = 0; i < 5; i++)
    {
        if (arr[i]>largest)
        {
            largest=arr[i];
        }
        
    }
    printf("%d",largest);
}