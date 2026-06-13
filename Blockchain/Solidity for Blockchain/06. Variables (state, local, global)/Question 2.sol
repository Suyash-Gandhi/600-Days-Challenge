// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
// Q. Create a contract with a state variable name and a function that updates it.
contract Change {
    string public name ="suyash";

    function increment() public  {
        name="suyash gandhi";
    }
}