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
