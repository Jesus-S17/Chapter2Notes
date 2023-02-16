//1
const readLine = require("readLine-sync");
let answer = readLine.question("Do you want to hear a joke?" +  "   Yes, No");
if (answer == "Yes"){
    console.log(`What is the best thing about Switzerland.\n I don't know ,but the flag is a big plus.`)}
else if (answer == "No") {
    console.log(`Okay bye`)
} else {
    console.log("invalid");
 }

//2
let num3 = readLine.question("Enter number");
if (num3 % 2 == 0){
    console.log("Divisible by 2");
} else {
    console.log("invalid");
}

//3
let num6 = readLine.question("Enter number");
if (num6 % 2 == 0){
    console.log("Divisible by 2");
} else {
    console.log("invalid");
} if(num6 % 3 == 0){
    console.log("Divisible by 3");
} else {
    console.log("invalid");
} if (num6 % 4 == 0){
    console.log("Divisible by 4");
} else {
    console.log("invalid");
} if(num6 % 5 == 0){
    console.log("Divisible by 5");
} else {
    console.log("invalid");
} if (num6 % 6 == 0){
    console.log("Divisible by 6");
} else {
    console.log("invalid");
}

//4
let number7 = Number(readLine.question( "Enter a number :)" ));
if (number7 == 17) {
    console.log ("Congrats You Won!!!");
} if (number7>17) {
    console.log("Greater than Number");
}if (number7<17) {
    console.log("Less than Number" );
}

//5
let cost = Number(readLine.question( "Enter current price: "));
let tax  =cost *.08
let newCost = cost + tax
console.log(`Your cost is ${newCost.toFixed(2)}`);
//6
if (cost <= 0){
    console.log("Invalid cost");
}
else {
    let tax  =cost *.08
    let newCost = cost + tax
    console.log(`Your cost is ${newCost.toFixed(2)}`);
}

//7
let mealCost =  Number(readLine.question("How was the service?: "));
let service = readLine.question("Was the service great? 20% tip");
let tip = 0;
if (service == "great"){
    tip = mealCost * .20;
} else if (service == "good"){
    tip = mealCost * .15;
} else {
    tip = mealCost * .10;
}