#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50, 60};
    int n = 6;
    int target = 40;

    int low = 0;
    int high = n - 1;
    int mid;

    while(low <= high) {
        mid = (low + high) / 2;

        if(arr[mid] == target) {
            printf("Element found at index %d", mid);
            return 0;
        }
        else if(target < arr[mid]) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }

    printf("Element not found");

    return 0;
}