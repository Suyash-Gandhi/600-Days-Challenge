// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract counter {
    mapping (address=>uint) public Age;

    function setAge(uint age) public {
Age[msg.sender]=age;
    }
    function getAge(address age) public view returns(uint){
return Age[age];
    }
}
