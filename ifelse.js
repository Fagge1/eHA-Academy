const readline = require('node:readline').createInterface({
   input: process.stdin,
   output: process.stdout
 }); 

readline.question('Enter Marks: ', grade => {
   console.log('Grade', grade);
   readline.close();
});




// let grade = prompt('Enter grade')
// console.log('grade', grade)
// if (70 - 100) {
//    greeting = "A";
// }
// else if (50 - 60) {
//    greeting = "c";
// }
// else if (0 - 40) {
//    greeting = "F";
// }