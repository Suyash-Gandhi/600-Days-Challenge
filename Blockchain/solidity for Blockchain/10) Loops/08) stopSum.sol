// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
//Q. Write a loop that stops when the sum exceeds 100, using break.


contract counter {
    function stop(uint n) public pure returns (uint) {
        uint sum = 0;
        for (uint i = 1; i <= n; i++) {
            
            if (sum > 100) {
                break;
            }
            sum += i;
        }
        return sum;
    }
}