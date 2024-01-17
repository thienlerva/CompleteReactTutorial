// Primitives

let age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;
isInstructor = true;

// Arrays & Objects

let hobbies: string[];

hobbies = ["Sport", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 32,
};

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = "React Complete guide";

// course = 13434;

// Type union

let courseName: string | number = "React Complete guide";

courseName = 13434;

// Type alias

type Kid = {
  name: string;
  age: number;
};

let aKid: Kid;

aKid = {
  name: "An",
  age: 7,
};

let children: Kid[];

// Functions & type

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

function insertGeneric<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const uupdatedArray = insertGeneric(demoArray, -1); // [-1, 1, 2, 3]
