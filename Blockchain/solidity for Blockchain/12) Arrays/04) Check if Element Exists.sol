// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//Q. Write a function that checks whether a given number exists in the array.

contract counter {
    uint[] arr = [1, 2, 3, 4, 5, 3, 4, 2, 3, 2, 2];

    function look(uint num) public view returns (bool) {
        for (uint i = 0; i < arr.length; i++) {
            if (arr[i] == num) {
                return true;
            }
        }
        return false;
    }
}