// 4.Write a program to print the following pattern (hint: use nested loop)
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

var readlineSync = require("readline-sync");
let n = readlineSync.question("enter a number");
for(let i=1;i<=n;i++)
{
    let s="";
    for(let j=1;j<=i;j++)
    {
        s+=String(j)
    }
    console.log(s)
    console.log("\n");
}