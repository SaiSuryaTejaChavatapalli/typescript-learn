const num1 = document.getElementById("num1")! as HTMLInputElement;
const num2 = document.getElementById("num2")! as HTMLInputElement;
const button = document.querySelector("button")! as HTMLButtonElement;

const add = (a: number, b: number) => {
  return a + b;
};
button.addEventListener("click", () => {
  console.log(add(+num1.value, +num2.value));
});
