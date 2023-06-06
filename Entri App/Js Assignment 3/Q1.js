// 1. write a js code to check given number is even or odd. User should be able to enter the number [ hint: use Modulus operator ]

var readlineSync = require("readline-sync");

let n = readlineSync.question("Enter a number :");

if(n%2==0){
    console.log("you have entered a even number");
}else{
    console.log("you have entered a odd number");
}
