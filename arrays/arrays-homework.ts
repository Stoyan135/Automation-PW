// Create an array of strings and add a new element at the end of the array. Log the result.
let colors: string[] = ["Red", "Blue", "Green"];
colors.push("Yellow");
// console.log("colors", colors);

// Create an array of numbers and remove the first element from the array. Log the result.
let numbers: number[] = [10, 20, 30, 40, 50];
numbers.shift();
// console.log("numbers", numbers);

// Use the map method to create a new array and divide each number by 2  “num / 2”   from [1, 2, 3, 4, 5].  Log the result.
let numbers1: number[] = [1, 2, 3, 4, 5];
let halfNumbers: number[] = numbers1.map(num => num / 2);
// console.log("halfNumbers", halfNumbers);

// Use the filter method to create a new array containing only numbers greater than 5 from [3, 7, 1, 9, 12, 4]. Log the result.
let numbers2: number[] = [3, 7, 1, 9, 12, 4];
let filteredNumbers: number[] = numbers2.filter(num => num > 5);
// console.log("filteredNumbers", filteredNumbers);

// Use the sort method to sort an array of numbers [9, 3, 7, 2, 8, 5] in ascending order. Log the result.
let numbers3: number[] = [9, 3, 7, 2, 8, 5];
let sortedNumbers: number[] = numbers3.sort((a, b) => a - b);
// console.log("sortedNumbers", sortedNumbers);

// Use the slice method to extract the first three elements from ['apple', 'banana', 'cherry', 'date', 'elderberry']. Log the result.
let fruits1: string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let firstThreeFruits: string[] = fruits1.slice(0, 3);
// console.log("firstThreeFruits", firstThreeFruits);

// Use the splice method to remove the second and third elements from ['car', 'bike', 'bus', 'train', 'boat'] . Log the result.
let vehicles: string[] = ['car', 'bike', 'bus', 'train', 'boat'];
vehicles.splice(1, 2);
// console.log("vehicles", vehicles);

// Write a function named “findLargest” that takes three numbers as parameters and returns the largest of them. Use if/else statement to find the largest number. Log the result.
function findLargest(a: number, b: number, c: number): number {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
let largestNumber = findLargest(10, 25, 15);
// console.log("Largest number:", largestNumber);

// Write a function “convertToCentimeters”  which receives parameter “inches” and add default value it and convert to centimeters. Log the result with default parameter and with passed parameter.
function convertToCentimeters(inches: number = 1): number {
    return inches * 2.54;
}
// Test the function with the default parameter
let defaultConversion = convertToCentimeters();
// console.log("Default conversion (1 inch to cm):", defaultConversion);
// Test the function with a passed parameter
let customConversion = convertToCentimeters(5);
// console.log("Custom conversion (5 inches to cm):", customConversion);

// Write a function named “calculateArea” that takes a required width parameter and an optional height parameter. If height is not provided, assume the shape is a square.
function calculateArea(width: number, height?: number): number {
    if (height === undefined) {
        return width * width; 
    } else {
        return width * height; 
    }
}
// console.log("Area of square (5x5):", calculateArea(5));  // Using only width
// console.log("Area of rectangle (5x10):", calculateArea(5, 10));  // Using width and height