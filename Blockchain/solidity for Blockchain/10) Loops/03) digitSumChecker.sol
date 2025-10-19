// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
/*Q. Use a loop to sum the digits of a number.
Then, if the sum is divisible by 3, return "Divisible by 3", else "Not Divisible".
*/

contract counter {
    function divisible(uint a) public pure returns (string memory) {
        uint sum = 0;
        uint temp = a;

        while (temp > 0) {
            sum += temp % 10;
            temp = temp / 10;
        }
        if (sum % 3 == 0) {
            return "divisible";
        } else {
            return "not divisible";
        }
    }
}
