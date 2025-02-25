// let vs const
let number: number = 5;
number = 10;

const message: string = 'Welcome'

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

console.log("stringValue", stringValue);