const num1 = document.getElementById("num1")! as HTMLInputElement;
const num2 = document.getElementById("num2")! as HTMLInputElement;
const button = document.querySelector("button")! as HTMLButtonElement;

const addition = (a: number, b: number) => {
  return a + b;
};
button.addEventListener("click", () => {
  console.log(addition(+num1.value, +num2.value));
});
//---------------------------------------------------------------------------------------------------
function add(a: number, b: number, showResult: boolean, phrase: string) {
  const result = a + b;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";
add(number1, number2, printResult, resultPhrase);
//---------------------------------------------------------------
let person = {
  name: "Sai Surya Teja",
  age: 23,
  hobbies: ["cricket", "singing"],
};
console.log(person);

//Automatically inferes the string type in object
for (let i of person.hobbies) {
  console.log(i.toUpperCase());
  console.log(i.map); // Gives Error
}

//-----------------------------------------------
//Tuple Type

// let person1: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [string, number];
// } = {
//   name: "Sai Surya Teja",
//   age: 23,
//   hobbies: ["cricket", "singing"],
//   role: ["ADMIN", 3],
// };

//person1.role[1] = 2; // Allowed
//person1.role[0] = 2; //Not Allowed because, it expects string and we are passing number
//person1.role.push("Hi") //Allowed, Note this case.
//person1.role=["a",3,3] // Not Allowed , it accepts only two length
//----------------------------------------------------------------------------------------------
//Enums
// enum Roles {
//   ADMIN,
//   USER,
// }
// console.log(Roles.ADMIN);
// console.log(Roles.USER);
// enum Roles {
//   ADMIN=6,
//   USER,
// }
//enum Roles {
//   ADMIN=6,
//   USER="name",
// }
//---------------------------------------------------------
//Any Type
//const parks: any = "Test";
//--------------------------------------------------------
//Union Types
// function combine(a: number | string, b: number | string) {
//   let result: string | number;
//   if (typeof a === "number" && typeof b === "number") {
//     result = a + b;
//   } else {
//     result = a.toString() + b.toString();
//   }
//   return result;
// }

// const combinedAges = combine(12, 8);
// console.log("combinedAges", combinedAges);

// const combinedNames = combine("Sai", "Surya");
// console.log("combinedNames", combinedNames);
//----------------------------------------------------------
//Literal Types
// function combine(
//   a: number | string,
//   b: number | string,
//   resultConversion: "as-number" | "as-text"
// ) {
//   let result: string | number;
//   if (
//     (typeof a === "number" && typeof b === "number") ||
//     resultConversion === "as-number"
//   ) {
//     result = +a + +b;
//   } else {
//     result = a.toString() + b.toString();
//   }
//   return result;
// }

// const combinedAges = combine(12, 8, "as-number");
// console.log("combinedAges", combinedAges);

// const combinedNames = combine("Sai", "Surya", "as-text");
// console.log("combinedNames", combinedNames);
//-----------------------------------------------------------------
//Type Aliases
// type Combinable=number| string
// type ConversionDescriptor="as-number" | "as-text"
// function combine(
//   a: Combinable,
//   b: Combinable,
//   resultConversion: ConversionDescriptor
// ){}
//-------------------------------------------------------------------
// Function Return Types and void types
// function adding(a: number, b: number): number {
//   return a + b;
// }

// function addingPrint(a: number, b: number): void {
//   console.log("Print", a + b);
// }
//----------------------------------------------------------------
//Function as a type
// function adding(a: number, b: number): number {
//   return a + b;
// }

// function addingPrint(a: number, b: number): void {
//   console.log("Print", a + b);
// }

// let func;
// func = adding;
// console.log(func(1, 2));
// func = 2;
// console.log(func(1, 3)); //Gives Error Because func is not a function
// We can specify function type

// let func: Function;
// func = "2"; // Gives error because "2" is not a function
// func = adding; // Doesn't give error , because adding is a function
// func = addingPrint; // Doesn't give error , because addingPrint is a function
//But we can add any function, so we have to more specific about function type

// let func:(a:number,b:number)=>number
// func="2" //Gives Error
// func=addingPrint // Gives Error, type definition doesn't match
// func=adding // Doesn't give error, Because it satisfies the function type of two arguments of number type and return type is number
//---------------------------------------------------------------------------------------------
//Callback functions
// function addAndCall(a: number, b: number, cb: (num: number) => void) {
//   const res = a + b;
//   cb(res);
// }

// addAndCall(1, 2, (num) => {
//   console.log("Num", num);
//num type doesn't need to type here
// });
//-------------------------------------------------------------------
//Unknown Type
// let userInput1: any;
// userInput1 = "b"; // Doesn't give error, because anyType is flexible
// //similarly
// let userInput: unknown;

// userInput = 2;
// userInput = { name: "sst" };
// //With unknown we can assign any type, It means the is not known yet,
// //it might get different type everytime

// let userName: string;

// userName = userInput1; // Doesn't give error, because anyType can be assigned to string.
// userName = userInput; // Gives error, because unknown can't be assigned to string
// userInput = "a";
// if (typeof userInput === "string") {
//   userName = userInput;
// } // We Have to specify if check if unknown has to be assign to the string.
