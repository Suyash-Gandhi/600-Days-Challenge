// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
//Q. Use a for loop to count how many numbers divide a given integer n.

pragma solidity ^0.8.0;

contract counter {
    function no(uint a) public pure returns (uint) {
        uint num = 0;
        for (uint i = 1; i <= a; i++) {
            if (a % i == 0) {
                num += 1;
            }
        }
        return num;
    }
}
