// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//Q. Find and return the index of a target number (or return -1 if not found).

contract counter {
    uint[] arr = [1, 2, 3, 4, 5, 3, 4, 2, 3, 2, 2];

    function look(uint num) public view returns (int) {
        for (uint i = 0; i < arr.length; i++) {
            if (arr[i] == num) {
                return int(i);
            }
        }
        return -1;
    }
}