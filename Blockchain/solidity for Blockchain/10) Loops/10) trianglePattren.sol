// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
//Q. Combine nested loops to print a right-angle triangle pattern (just for logic practice, not real contract use).

contract counter {

event Print(string line);

    function stop() public {
        for (uint i = 1; i <= 5; i++) {
            string memory row = "";
            for (uint j = 1; j <= i; j++) {
                row = string.concat(row, "*");
            }
            emit Print(row);
        }
    }
}