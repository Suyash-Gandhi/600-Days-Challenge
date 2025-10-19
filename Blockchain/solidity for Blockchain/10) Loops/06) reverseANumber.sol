// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
//Q. Use a while loop to reverse digits of a given integer (e.g., 123 → 321).

contract counter {
    function change(uint a) public pure returns (uint) {
        uint original;
        uint reverse = 0;
        while (a > 0) {
            original = a % 10;
            reverse = reverse * 10 + original;
            a = a / 10;
        }
        return reverse;
    }
}
