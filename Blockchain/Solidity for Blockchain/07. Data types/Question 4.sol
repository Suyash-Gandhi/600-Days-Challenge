// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
/*3. Owner Address Storage

Create a contract that:

Stores the deployer's address in the constructor
Provides a function to view the owner's address
*/


contract OwnerStorage {

    address public owner;//f you make the variable public, Solidity automatically creates a getter function for you:

    constructor() {
        owner = msg.sender;
    }
}