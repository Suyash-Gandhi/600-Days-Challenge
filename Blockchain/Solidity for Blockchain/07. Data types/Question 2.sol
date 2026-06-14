// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
/*
User Profile

Create a contract that stores:

Name (string)
Age (uint)
Active status (bool)

Add functions to update and retrieve all values.

*/

contract Profile {
    string name;
    uint age;
    bool activity;
    function updateProfile(string memory c,uint a,bool b) public  returns(string memory,uint,bool)   {
       name=c;
        age = a;
        activity=b;
       return (name,age,activity);
    }

    function getProfile()public view  returns(string memory,uint ,bool){
    return (name,age,activity);
}
}

