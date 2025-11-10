// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//Q. Reverse the order of elements in an array without using an extra array.


contract counter {
    uint[] arr = [1, 2, 3, 4, 5];

    function stop() public {
        uint n = arr.length;

        for (uint i = 0; i < n / 2; i++) {
            {
                uint temp = arr[i];
                arr[i] = arr[n - i - 1];
                arr[n - i - 1] = temp;
            }
        }
    }
    function look() public view returns (uint[] memory) {
        return arr;
    }
}
