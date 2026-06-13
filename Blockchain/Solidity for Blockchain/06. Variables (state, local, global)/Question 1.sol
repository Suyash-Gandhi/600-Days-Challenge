// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
//Q. Create a contract with a state variable count initialized to 0 and a function to increment it.
contract Counter {
    uint public count=0;

    function increment() public  {
        count++;
    }
}