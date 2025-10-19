// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
//Q. Write a function that prints numbers 1–50 but skips multiples of 7 using continue.


contract counter{
// method 1 - store the result in an array then return
 function skip() public pure returns (uint[] memory){
  uint index=0;
   uint[] memory num; // 50 - 7 = 43 numbers
   for (uint i=1; i<=50; i++) 
   {
    if (i%7==0) continue ;
    num[index]=i;
   index++;
   }
return num;
 }

// method 2 - use events to print as solidity does not have log/print methods
 event print(uint no);

 function power() public  {
   for (uint i=1; i<=50; i++) 
   {
    if (i%7==0) {
      continue ;
    }
    emit print(i);
   }

 }
}