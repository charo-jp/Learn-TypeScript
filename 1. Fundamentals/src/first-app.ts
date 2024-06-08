// Array
let hobbies: string[];
hobbies = ["charo", "is", "barking"];

// Constants do not need to assign a type because it is immutable.

// Function
function add(a: number, b: number): number {
  console.log(a + b);
  return a + b;
}

// type starts with Upper Letter.
type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

console.log(calculate(2, 4, add));

// Interface vs Types

interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials;

creds = {
  password: "charowan",
  email: "yuyahochi@gmail.com",
};

type Admin = {
  permissions: string[];
};

type AppUser = {
  userName: string;
};

type AppAdmin = Admin & AppUser;

// Literal Types
type Role = "admin" | "user" | "editor";

let role: Role;

// type guards
function performAction(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
  }
}

// Generics Type:
let roles: Array<Role>;

type DataStorage<T> = {
  // I do not know what type storage will hold.
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: ["c", "d"],
  add(data) {
    this.storage.push(data);
  },
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const newUser = merge<{ name: string }, { age: number }>(
  { name: "charo" },
  { age: 25 }
);

