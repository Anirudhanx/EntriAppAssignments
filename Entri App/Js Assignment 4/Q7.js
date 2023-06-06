// 7. Write a menu driven program to do the basic mathematical operations such as addition, 
// subtraction, multiplication and division (hint: use if else ladder or switch)
// InputOutput
// 1 addition
// 2 subtraction
// 3 multiplication
// 4 division
// a. Program should have 4 functions named addition(), subtraction(), 
// multiplication() and division()
// Eg: Output: select the operation
// Input: 1
// Output: Enter the first number 
// Input: 10
// Output: Enter the second number 
// Input: 20
// Output: sum of 10+20=30

var readlineSync = require("readline-sync");
console.log(" 1 for addition\n 2 for subtraction\n 3 for multiplicatoin\n 4 for division");
let n = readlineSync.question("select the operation");
let n1 = readlineSync.question("Enter your first number");
let n2 = readlineSync.question("Enter your second number");
n =parseInt(n);
n1 =parseInt(n1);
n2 =parseInt(n2);
switch(n){
    case 1:
        let a=add(n1,n2);
        console.log(n1,"+",n2,"=",a);
        break;
    case 2:
        let b=subtract(n1,n2);
        console.log(n1,"-",n2,"=",b);
        break;
    case 3:
        let c=multiplicate(n1,n2);
        console.log(n1,"*",n2,"=",c);
        break;
    case 4:
        let d=divide(n1,n2);
        console.log(n1,"/",n2,"=",d);
        break;
    default :
    console.log("enter valid operation");
    break;
}
function add(a,b){
    let sum=a+b;
    return sum;
}
function subtract(a,b){
    let sub=a-b;
    return sub;
}
function multiplicate(a,b){
    let mult=a*b;
    return mult;
}
function divide(a,b){
    let div=a/b;
    return div;
}