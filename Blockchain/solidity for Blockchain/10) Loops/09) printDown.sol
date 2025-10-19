// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
//Q. Use a while loop to print numbers from n down to 1.


contract counter {
    event print(uint num);
    function stop(uint n) public {
        while (n > 0) {
          emit print(n);
            n--;
        }
        
    }
}
