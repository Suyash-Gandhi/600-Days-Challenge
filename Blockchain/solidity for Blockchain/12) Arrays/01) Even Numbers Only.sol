// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//Q. From an array, return a new array containing only even numbers.



contract counter {
    uint[] arr = [1, 2, 3, 4, 5];

    function stop() public view returns (uint[] memory) {
        require(arr.length > 0, "index out of bounds");
        uint count = 0;

//count even no
        for (uint i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                count++;
            }
        }
//create new array
        uint[] memory arr2 = new uint[](count);
        uint j=0;
//asign even no
        for (uint i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                arr2[j] = arr[i];
                j++;
            }
        }

        return arr2;
    }
}
