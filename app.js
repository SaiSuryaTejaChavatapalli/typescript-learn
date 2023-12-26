function adding(a, b) {
    return a + b;
}
function addingPrint(a, b) {
    console.log("Print", a + b);
}
var func;
func = adding;
console.log(func(1, 2));
func = 2;
console.log(func(1, 3));
