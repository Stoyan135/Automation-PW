// Exercise 1: Check if a number is even or odd
// Step 1: Declare a variable `num` and assign any number to it.
let num: number = 10;
// Step 2: Declare a variable `isEven` and use a logical expression to check if `num` is even.
let isEven: boolean = num % 2 === 0;
// Step 3: Log the result
console.log(`The number ${num} is ${isEven ? "even" : "odd"}.`);

// Exercise 2: Check if a string has more than 10 characters
// Step 1: Declare a variable `text` and assign any string to it
let text: string = 'This is my homework ';
// Step 2: Declare a variable `isLong` and check if the length of `text` is greater than 10.
let isLong: boolean = text.length > 10;
// Step 3: Log the result
let textLengthMessage: string = `The text "${text}" has ${isLong ? "more" : "less or equal"} than 10 characters.`;
console.log(textLengthMessage);

// Exercise 3: Verify if a number is positive
// Step 1: Declare a variable `number` and assign any number to it.
let number: number = 50;
// Step 2: Declare a variable `isPositive` and check if `number` is greater than 0.
let isPositive: boolean = number >= 0;
// Step 3: Log the result
let positivityMessage: string = `The number ${number} is ${isPositive ? "positive" : "negative"}.`;
console.log(positivityMessage);

// Exercise 4: Determine if a number is negative or zero
// Step 1: Declare a variable `numCheck` and assign any number to it.
let numCheck: number = -135;
// Step 2: Declare a variable `isNonPositive` and check if `numCheck` is less than or equal to 0.
let isNonPositive: boolean = numCheck <= 0;
// Step 3: Log the result
let negativeMessage: string = `The number ${numCheck} is ${isNonPositive ? "negative or zero" : "positive"}`;
console.log(negativeMessage);

// Exercise 5: Check if a string is empty
// Step 1: Declare a variable `message` and assign any string to it.
let message: string = 'Not empty';
// Step 2: Declare a variable `isEmpty` and check if `message` is an empty string.
let isEmpty: boolean = message.length === 0; 
// Step 3: Log the result
let emptyMessage: string = `The message is ${isEmpty ? "empty" : "not empty"}.`;
console.log(emptyMessage);

// Exercise 6: Determine if a number is within a range (10 to 100 inclusive)
// Step 1: Declare a variable `rangeNumber` and assign any number to it.
let rangeNumber: number = 5;
// Step 2: Declare a variable `isInRange` and check if `rangeNumber` is between 10 and 100 (inclusive).
let isInRange: boolean = rangeNumber >= 10 && rangeNumber <= 100;
// Step 3: Log the result
let rangeMessage: string = `The number ${rangeNumber} is ${isInRange ? "within" : "outside"} the range of 10 to 100.`;
console.log(rangeMessage);

// Exercise 7: Check if a number is either 0 or 100
// Step 1: Declare a variable `specialNumber` and assign any number to it.
let specialNumber: number = 100;
// Step 2: Declare a variable `isZeroOrHundred` and check if `specialNumber` is either 0 or 100.
let isZeroOrHundred: boolean = specialNumber === 0 || specialNumber === 100;
// Step 3: Log the result
let specialMessage: string = `The number ${specialNumber} is ${isZeroOrHundred ? "either 0 or 100" : "not 0 or 100"}.`;
console.log(specialMessage)

// Exercise 8: Verify if a boolean value is true
// Step 1: Declare a variable `flag` and assign a boolean value.
let flag: boolean = true;
// Step 2: Declare a variable `isTrue` and check if `flag` is true.
let isTrue: boolean = flag === true;
// Step 3: Log the result
console.log(isTrue);

// Exercise 9: Check if a number is odd and greater than 50
// Step 1: Declare a variable `oddCheck` and assign any number to it.
let oddCheck: number = 57;
// Step 2: Declare a variable `isOddAndLarge` and check if `oddCheck` is odd and greater than 50.
let isOddAndLarge: boolean = (oddCheck % 2 !== 0) && (oddCheck > 50);
// Step 3: Log the result
let resultMessage: string = `The number ${oddCheck} is ${isOddAndLarge ? "odd and greater than 50" : "not odd or not greater than 50"}.`;
console.log(resultMessage);

// Exercise 10: Determine if a string starts with the letter 'A'
// Step 1: Declare a variable `word` and assign any string to it.
let word: string = "Apple";
// Step 2: Declare a variable `startsWithA` and check if `word` starts with 'A'.
let startsWithA: boolean = word.startsWith("A");
// Step 3: Log the result
let resultMessage1: string = `The word "${word}" ${startsWithA ? "starts with 'A'" : "does not start with 'A'"}.`;
console.log(resultMessage1);
