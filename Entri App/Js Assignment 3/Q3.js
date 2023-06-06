// 3.write a program to find the day of week  based on input number 
// 1 for monday
// 2 for tuesday
// .
// .
// .
// 7 for saturday
// Sample output:
// Enter the number :3 
// day:wednesday

var readlineSync = require("readline-sync");

let day = readlineSync.question("Enter the number :");

if (day == 1) {
    console.log("Monday");
} else if (day == 2) {
    console.log("Tuesday");
} else if (day == 3) {
    console.log("Wednesday");
} else if (day == 4) {
    console.log("Thursday");
} else if (day == 5) {
    console.log("Friday");
} else if (day == 6) {
    console.log("Saturday");
} else if (day == 7) {
    console.log("Sunday");
}