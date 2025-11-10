// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//Q. Count how many times a given number appears in an array.

contract counter {
    uint[] arr = [1, 2, 3, 4, 5,3,4,2,3,2,2];


    function look(uint num) public view returns (uint) {
uint count=0;

for (uint i=0; i<arr.length; i++) 
{
    if (arr[i] == num) {
        count+=1;
    }
}

        return count;
    }
}