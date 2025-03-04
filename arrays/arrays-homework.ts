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