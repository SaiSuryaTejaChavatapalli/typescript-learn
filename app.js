function combine(a, b) {
    var result;
    if (typeof a === "number" && typeof b === "number") {
        result = a + b;
    }
    else {
        result = a.toString() + b.toString();
    }
    return result;
}
var combinedAges = combine(12, 8);
console.log("combinedAges", combinedAges);
var combinedNames = combine("Sai", "Surya");
console.log("combinedNames", combinedNames);
