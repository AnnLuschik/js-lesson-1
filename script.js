// Part 1

let userNumber = +prompt("Enter any number, please");

let additionalNumber = +prompt("What number would you like to add?");

let result = userNumber + additionalNumber;

userNumber = String(userNumber);
additionalNumber = String(additionalNumber);

let calculationFormula = "(" + userNumber + " + " + additionalNumber;

additionalNumber = +prompt("What number would you like to subtract?");
result -= additionalNumber;
calculationFormula += " - " + additionalNumber + ")";

additionalNumber = +prompt("What number would you like to multiply the result?");
result *= additionalNumber;
calculationFormula += " * " + additionalNumber;

additionalNumber = +prompt("What number would you like to divide the result?");
result /= additionalNumber;
calculationFormula += " / " + additionalNumber;

alert(`${calculationFormula} = ${result}`);

// Part 2 

let currentMonth = "july";
let currentDay = 10;
let userAge = undefined;

console.log(`Переменная currentMonth имеет тип — ${typeof currentMonth}`);
console.log(`Переменная currentDay имеет тип — ${typeof currentDay}`);
console.log(`Переменная userAge имеет тип — ${typeof userAge}`);

// Part 3

let firstNumber = 4;
let secondNumber = 6;
alert(firstNumber.toString() + secondNumber.toString());
alert(String(firstNumber) + String(secondNumber));
