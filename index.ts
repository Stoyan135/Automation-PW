// let vs const
let number1: number = 5;
number1 = 10;

const message1: string = 'Welcome'

// String
let welcomeMessage: string = "Hello, Peter!";
let test: string = 'Ivan';

let welcomeMessageLenght: number = welcomeMessage.length;

// String interpulation
let welcomeMessageDetails: string = `My wellcome message lenght is ${welcomeMessageLenght}`
let userWelcomeMessage: string = `Welcome, ${test}`;

// Number
let firstNumber: number = 5;
let secondNumber: number = 10;

// Number math operations
let add: number = firstNumber + secondNumber;
let substrcat: number = firstNumber - secondNumber;
let multiply: number = firstNumber * secondNumber;
let devide: number = firstNumber / secondNumber;

// Boolean (true/false)
let isGreater: boolean = firstNumber > secondNumber;
let isLower: boolean = firstNumber < secondNumber;
let isEqual: boolean = firstNumber === secondNumber;
let isGreaterOrEqual: boolean = firstNumber >= secondNumber;
let isLowerOrEqual: boolean = firstNumber <= secondNumber;

let areNumbesrEqualTo: boolean = 5 === firstNumber && 10 === secondNumber;
let isAnyNumberEqualT: boolean = 6 === firstNumber || 10 === secondNumber;

// Any
let stringValue: any = 'Hello';
stringValue = 10;
stringValue = 10 === 10;
stringValue = [10, 20, 30];

// Ternary operator
const isPositiveNum: string =
 5 > 0 ? "The number is positive" : "The number is negative";

const age: number = 30;
const myName: string = "Stoyan";

const personDescription = 
age < 40
 ? `${myName} is younger than 40  He is ${age} old.`
 : `${myName} is older than 40  He is ${age} years old`;

const personName = `His name is "${myName}".`;

// If Else Statement

if (age < 40) {
    console.log('Age is lower than 40');
}
else {
console.log('Age is greater than 40');
}

const num: number = 50;

if (num < 10) {
console.log("The number is lower than 10.");
}
else if (num > 100) {
    console.log("The number is greater than 100.");
}
else {
    console.log("The number is between 10 and 100.");
}

// Type Alias

type PersonInfoType = string | number

const personNameInf: PersonInfoType = "Ivan";
const personAgeIng: PersonInfoType = 25;