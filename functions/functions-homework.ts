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