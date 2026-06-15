// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
/*3. Store a Hash

Create a contract that:

Accepts a username
Generates and stores its hash in a bytes32 variable using keccak256
Get the length of the byte data
*/

contract UserHash {
    bytes32 user;
    uint public userLen;
    function setHash(string memory username) public returns(uint){
       bytes memory len=abi.encodePacked(username);
       user=keccak256(len);
       userLen=len.length;
       return userLen;
    }

    function getHash()public view returns(bytes32, uint){
        
        return (user,userLen);
    }
}
