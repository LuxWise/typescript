// strings
const str1: string = "Hola, soy una cadena de texto";
const username: string = "Paco";

const welcomeMessage: string = `Hola, bienvenido al sistema ${username}`;

// numbers
const num1: number = 10;
const num2: number = 2e2; // Exponencial
const num3: number = 0xa; // Hexadecimal
const num4: number = 0o12; // Octal
const num5: number = 0b1010; // Binario

// booleans
const bool1: boolean = true;
const bool2: boolean = false;

// undefined
let varUndefined: undefined;
varUndefined = undefined;

// null
let varNull: null;
varNull = null;

// objets >> requiere interfaz o tipo
const enginner = {
  name: "Camilo",
  married: false,
  courses: ["HTML", "CSS", "JAVASCRIPT", "REACT", "TYPESCRIPT"],
  traveltoAmerica: undefined,
};

// arrays
const numbers: number[] = [1, 2, 3, 4, 5]; // array of numbers
const names: string[] = ["Juan", "Felipe", "Pedro"]; // array of names
const booleanValues: boolean[] = [true, false, true]; // array of booleans

// enum
enum daysWeek {
  mondar,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}
enum colors {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

// functions
function plus(a: number, b: number): number {
  return a + b;
}

const divide = (a: number, b: number): number => a / b;

function greet1(name: string, age?: number): string {
  // ? significa que el valor no es obligatorio
  if (age !== undefined) {
    return `Hello, my name is ${name} i have ${age} years`;
  } else {
    return `Hello, my name is ${name}`;
  }
}

function greet2(name: string, age: number = 30): string {
  return `Hello, my name is ${name} i have ${age} years`;
}

// class
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// interface
interface Person {
  name: string;
  age: number;
}

// interface con propiedades opcionales
interface Product {
  name: string;
  price: number;
  description?: string;
}

// interface para funciones
interface Comparator {
  (a: number, b: number): boolean;
}

// interface para funciones
interface Person {
  name: string;
  age: number;
  greet(): void;
}

// types
type Nmber = number;

// type object
type Staff = {
  name: string;
  age: number;
};

// type with union types
type Name = number | null;

// type object
type Product1 = {
  name: string;
  price: number;
  description?: string;
};

// type from functions
type customer1 = {
  (a: number, b: number): boolean;
};

//type from class
type Person2 = {
  name: string;
  age: number;
  greet(): void;
};
