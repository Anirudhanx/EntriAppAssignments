// 6. Write a js program to check whether a given number is prime or not
// a. Program should accept an input from the user and display whether the 
// number is prime or not
// Eg: Output: Enter a number
// Input: 7
// Output: Entered number is a Prime number

var readlineSync = require("readline-sync");
let n = readlineSync.question("Enter a number");
let a=0;
for(i=2;i<n;i++){
    if(n%i==0){
        a=a+1;
    }
}
if(a==0){
    console.log("Entered number is prime number");
}else{
    console.log("Entered number is not prime number");
}