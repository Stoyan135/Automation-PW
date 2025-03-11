// Exercise One
// Step One: Declare Typescript interface "Country"
// and add types name: string, capital: string, population: number, language: string

interface Country {
  name: string;
  capital: string | "Sofia";
  population: number;
  language: string;
}

// Step Two: Declare an object "country" with properties following "Country" interface

const firstCountry: Country = {
  name: "Bulgaria",
  capital: "Sofia",
  language: "Bulgarian",
  population: 7000000,
};

const secondCountry: Country = {
  name: "Italy",
  capital: "Rome",
  language: "italian",
  population: 590000000,
};

// Step Three: Declare a function "displayCountryDetails" which receives "country" object and
//displays the details for it

function displayCountryDetails(countryOnj: Country) {
  return `The capital of ${countryOnj.name} is ${countryOnj.capital}. 
  The official language is ${countryOnj.language} and population of ${countryOnj.population} people`;
}

const detailsAboubtBulgaria = displayCountryDetails(firstCountry);
const detailsAboubtItaly = displayCountryDetails(secondCountry);

// console.log(detailsAboubtBulgaria, "\n", detailsAboubtItaly);

//

// Exercise Two
// Step One: Declare TypeScript interface "Student"
// Add propertis id: number, name: string, age: number, grade: number
interface Student {
  id: number;
  name: string;
  age: number;
  grade: number;
}

// Step Two: Declare an object with properties following interface "Student"
const studentOne: Student = { id: 1, name: "Pesho", age: 20, grade: 85 };
const studentTwo: Student = { id: 2, name: "Tosho", age: 22, grade: 90 };
const studentThree: Student = { id: 3, name: "Ivan", age: 21, grade: 78 };

// Step Three: Declare array "students" with objects of type "Student"

let studentsArr: Student[] = [studentOne, studentTwo, studentThree];

// students.map((student) => (student.grade = 4));

studentsArr.map((student) => {
  if (student.name === "Tosho") {
    return;
    student.grade = 3;
  }
});

// console.log("students", students);

// Step Four: Declare a function "getStudents" and pass the array students as parameter
// return only students name as a result

function getStudents(students: Student[]): string[] {
  return students.map((student) => student.name);
}

const studentsNames = getStudents(studentsArr);
console.log("studentsName", studentsNames);

//

//Exercise Three
// Declare a function "sortStudents" that receive students array result from the previous exercise
// and sort them by ascending

function sortStudents(students: Student[]): Student[] {
  return students.sort((a, b) => a.grade - b.grade);
}

// Calling the function and storing the sorted students
const sortedStudents = sortStudents(studentsArr);

// Displaying sorted students
console.log("Sorted Students by Grade:", sortedStudents);
