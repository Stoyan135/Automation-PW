// Arrays
let numbersArray: number[] = [1,2,3,4];
let stringAndNumsArray: (number | string)[] = ["Pesho","Gosho", 2, "3"];

let fruits: string[] = ["Apple", "Banana", "Pear", "Peach", "Grape"];
let firstEl: string = fruits[1];
let secondEl: string = fruits[3];

fruits.push("Mango");
console.log("fruits", fruits);

numbersArray.pop();
console.log("numbersArray", numbersArray);

fruits.shift();
console.log("fruits", fruits);

// ~ 9:20
numbersArray.unshift(5);
console.log("numbersArray", numbersArray);

let multyplyNumbers:number[] = numbersArray.map((element) => element *2);

let multiSpecialNumbers = numbersArray.map((element: number) => {
    if (element >2) {
        return element * 2
    }
})

// Untill ~ 9:27
