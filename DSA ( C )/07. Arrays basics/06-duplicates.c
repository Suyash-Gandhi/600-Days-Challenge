#include <stdio.h>
int main(){
    int arr[]={1,2,3,2,4,1};
int size=6;
int freq[10]={0};
for (int i = 0; i < size; i++)
{
    freq[arr[i]]++;
}

for(int i = 0; i < 10; i++) {
        if(freq[i] > 0) {
            printf("%d occurs %d times\n", i, freq[i]);
        }
    }
    return 0;
}