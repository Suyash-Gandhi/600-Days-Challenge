// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
/*Q. Given a student’s score (0–100), return their grade:

A: 90–100

B: 80–89

C: 70–79

F: below 70
*/


contract counter{


 function setGrade(uint a) public pure returns ( string memory) {
    if (a<70){
return "F";
    }
    else if (a>=70&&a<80){
return "C";
    }
     else if (a>80&&a<90){
return "B";
    }
     else if (a>=90&&a<=100){
return "A";
    }
    else{
        return "enter no in range of 100";
    }
 }
}