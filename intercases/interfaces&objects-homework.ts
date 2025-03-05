// Create a TypeScript interface named Person that represents aperson with the following properties
interface Person {
    name: string;
    lastName: string;
    age: number;
    email: string;
    phoneNumber: number;
  }

  // Create a TypeScript interface named PersonInfo that Extends Person type from the previous exercise and add the following properties:
  interface PersonInfo extends Person {
    country?: string;
    greeting?: () => string;
  }
 
  // Create an object of type Person using the interface from Exercise 1. Declare a variable person1 of type Person.
  const person1: Person = {
    name: "Stoyan",
    lastName: "Zlatev",
    age: 25,
    email: "stoyan@gmail.com",
    phoneNumber: +359893488602
  };

  // Create an object of type PersonInfo using the interface from Exercise 2. Declare a variable person2 of type PersonInfo.
  const person2: PersonInfo = {
    name: "Jane",
    lastName: "Doe",
    age: 28,
    email: "jane.doe@example.com",
    phoneNumber: 9876543210,
    country: "USA",
    greeting: () => "Hello, welcome!"
  };