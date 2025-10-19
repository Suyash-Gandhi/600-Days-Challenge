// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
//Q. Calculate n! (factorial) using a for or while loop.

contract counter {
    function factorial(uint a) public pure returns (uint) {
        uint fact = 1;
        for (uint i = a; i > 0; i--) {
            fact *= i;
        }
        return fact;
    }
}
