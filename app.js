function combine(a, b, resultConversion) {
    var result;
    if ((typeof a === "number" && typeof b === "number") ||
        resultConversion === "as-number") {
        result = +a + +b;
    }
    else {
        result = a.toString() + b.toString();
    }
    return result;
}
var combinedAges = combine(12, 8, "as-number");
console.log("combinedAges", combinedAges);
var combinedNames = combine("Sai", "Surya", "as-text");
console.log("combinedNames", combinedNames);
