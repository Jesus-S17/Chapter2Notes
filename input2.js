const readLine = require("readLine-sync");

//1
let number = Number(readLine.question("Enter a number: "));
let number1 = Number(readLine.question("Enter a number: "));
let newSum = number + number1;
console.log(`Your sum is ${newSum.toFixed( 2)}`);

//2
let number2 = Number(readLine.question("Enter a number: "));
let number3 = Number(readLine.question("Enter a number: "));
let newSum1 = number2 - number3;
console.log(`Your difference is ${newSum1.toFixed( 2)}`);

//3
let number4 = Number(readLine.question("Enter a number: "));
let number5 = Number(readLine.question("Enter a number: "));
let newSum2 = number4 * number5;
console.log(`Your product is ${newSum2.toFixed( 2)}`);

//4
let number6 = Number(readLine.question("Enter a number: "));
let number7 = Number(readLine.question("Enter a number: "));
let newSum3 = number6 - number7;
console.log(`Your quotient is ${newSum3.toFixed( 2)}`);

//5
let number8 = Number(readLine.question("Enter a number: "));
let number9 = Number(readLine.question("Enter a number: "));
let newSum4 = number8 % number9;
console.log(`Your remainder is ${newSum4}`);

//6
let firstName = Number(readLine.question("Enter your first name: "));
let lastName = Number(readLine.question("Enter your last name: "));
let midName = Number(readLine.question("Enter your middle if you have one: "));
console.log(`Greetings ${firstName} ${midName} ${lastName}`);