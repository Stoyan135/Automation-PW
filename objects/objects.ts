
// Object types with Aliases
type Role =  {
   role: "manager" | "founder"
}
type Permissions = {
    permissions: "admin" | "user"
}

type User = Role & Permissions;


const user: User = {
    role: "founder",
    permissions: "admin"
}
//console.log("userOnject", user);

// Objecy types with Interfaces
interface Animal {
    species: string;
    breed?: string;
    age: number;
    weight?: number;
    name: string;
}

const animal: Animal = {
species: "dog",
age: 5,
name: "Tom",
breed: "Frenchie",
weight: 3
};

//console.log("animal", animal);

interface Cars {
    color: string;
    wheels: number;
    transmission: "manual" | "automatic";
    fuelType: "disel" | "gasoline";
    startEngine: () => string
}

const car: Cars = {
    color: "white",
    wheels: 4,
    transmission: "manual",
    fuelType: "disel",
    startEngine: function() {
        return 'Start the engine'
    },
}
const carStartEngine = car.startEngine();
//console.log("car", car);

// Get object keys

// const keys = Object.keys(car) - keys 
// const keys = Object.values(car) - values
// console.log("keys", keys);

// Assign two objects in one

const colorObj = {color: 'black'}
const backgraoundObj = {background: 'white'}

const assigedObj = Object.assign({}, colorObj, backgraoundObj)
console.log("assigedObj", assigedObj);

export {};