// 5. Write a program to find the number of even numbers in an array
// a. The program should accept an array and display the number of even numbers 
// contained in that array
// E.g.: Output: Enter the size of an array
// Input: 5
// Output: Enter the values of array
// Input: 11, 20, 34, 50, 33
// Output: Number of even numbers in the given array is 3

var readlineSync = require("readline-sync");
let n = readlineSync.question("the size of the array");
console.log("enter the values of the array");
const a=[];
let b=0;
for(let i=0;i<n;i++){
    a[i]=readlineSync.question("");
    if(a[i]%2==0)
    {
        b=b+1;
    }
}
console.log("Number of even numbers in the given array is",b);