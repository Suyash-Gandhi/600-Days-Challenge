#include <stdio.h>
#include <limits.h>

int kadane(int arr[], int n) {
    int maxSoFar = INT_MIN;  
    int currentMax = 0;       

    for (int i = 0; i < n; i++) {
        currentMax = currentMax + arr[i];

        if (maxSoFar < currentMax)
            maxSoFar = currentMax;

        if (currentMax < 0)
            currentMax = 0;
    }

    return maxSoFar;
}

int main() {
    int arr[] = {-2, -3, 4, -1, -2, 1, 5, -3};
    int n = sizeof(arr) / sizeof(arr[0]);

    int result = kadane(arr, n);
    printf("Maximum Subarray Sum = %d\n", result);

    return 0;
}
