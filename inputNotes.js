const readLine = require('readLine-sync');

let answer = readLine.question( query: "What day is it?\nYour answer:");
console.log(answer);

let username = readLine.question( query:"Enter username:");
let password = readLine.question( query:"Enter password:");
if (password == "abd"){
    console.log(`Welcome ${username}`);
} else {
    console.log("invalid");
}

let currentPrice = readLine.question( query: "Enter current price");
let originalPrice = readLine.question( query: "Enter original price ");
let diff = originalPrice-currentPrice;
let dicount = (diff/originalPrice). toFixed(fractionDigits:2);
console.log(`discount: ${discount}`);

//Exponents
let base = Number(readLine.question( query: "Enter the base:"));
let exp = Number(readLine.question( query: "Enter the exponent":));
let answer2 = base ** exp
console.log(`${base} to the power of ${exp} = ${answer2}`);

//Rounding
console.log(5.7);
console.log(Math.round(x:5.7));
console.log(5.3);
console.log(Math.round(x:5.3));
console.log(-5.3);
console.log(Math.round(x:-5.3));
