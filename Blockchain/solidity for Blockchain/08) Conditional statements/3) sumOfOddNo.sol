// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//Q. Use a loop and conditionals to sum all odd numbers up to n.

pragma solidity ^0.8.0;

contract counter{



 function no(uint a) public pure returns (uint) {
    uint sum=0;
   for ( uint i = 0; i < a; i++){
     if(i%2!=0){
 sum+=i;
     }
    
   }
    return sum;
 }
}