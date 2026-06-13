// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
//Write a function that takes two numbers and returns their sum using a local variable.
contract counter {
    

    function increment(uint a, uint b) public pure returns(uint) {
       uint  add = a+b;
       return add;
    }
}


