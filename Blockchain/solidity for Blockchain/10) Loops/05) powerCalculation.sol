// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
//Q. Compute a^b (a raised to b) using a for loop (no ** operator).

contract counter {
    function power(uint a, uint b) public pure returns (uint) {
        uint pow = 1;
        for (uint i = 1; i <= b; i++) {
            pow *= a;
        }
        return pow;
    }
}
