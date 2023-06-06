// 3. Write a program to find the sum of all the odd numbers for a given limit
// a. Program should accept an input as limit from the user and display the sum of all 
// the odd numbers within that limit
// For example if the input limit is 10 then the result is 1+3+5+7+9 = 25
// Output: Enter a limit
// Input: 10
// Output: Sum of odd numbers = 25 

var readlineSync = require("readline-sync");
let n = readlineSync.question("Enter a limit");
let x=0;
for(let i=1;i<=n;i++)
{
    if(i%2==1)
    {
        x=i+x;
    }
}
console.log("sum of odd numbers =",x);