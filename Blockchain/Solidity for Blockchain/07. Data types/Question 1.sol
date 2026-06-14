// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/*1. Temperature Tracker

Create a contract that:

Stores temperature using int
Allows positive and negative temperatures
Has a function to update the temperature

*/


contract Temprature {
    int currentTemprature=25;

    function updateTemp(int a) public  returns(int,string memory)   {
       currentTemprature = a;
       return (currentTemprature,"is current temprature");
    }

    function getTemp()public view  returns(int){
return currentTemprature;
}
}

