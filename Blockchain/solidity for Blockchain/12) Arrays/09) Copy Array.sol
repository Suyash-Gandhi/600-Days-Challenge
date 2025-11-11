// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//Q. Copy all elements from one array into another.

contract counter {
    uint[] arr = [1, 2, 3, 4, 5, 3];

    function look() public view returns (uint [] memory) {
        uint length = arr.length;
           uint[] memory arr2 = new uint[](length);
        for (uint i = 0; i < length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
    }
}
