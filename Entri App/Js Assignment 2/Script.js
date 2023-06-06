//  1 . write a js program to console the multiplication table of a number

let x = 15;
let y = 4;
for (let i = 1; i <= x; i++) {
  console.log(i + "*" + x + "=" + i * y);
}
//  2 . find the square of each number in an array=[1,3,9,12,15,18,21] using loop

let array = [1, 3, 9, 12, 15, 18, 21];
for (let i = 0; i < array.length; i++) {
  console.log("square of " + array[i] + " is " + array[i] ** 2);
}
//  3 .  write a js program to console the grade of a student using if else if

let mark = 64;
if (mark > 90) {
  console.log("your grade is A");
} else if (mark > 70) {
  console.log("your grade is B");
} else if (mark > 50) {
  console.log("your grade is C");
} else if (mark > 30) {
  console.log("your grade is D");
} else {
  console.log("your grade is E");
}
