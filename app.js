function addAndCall(a, b, cb) {
    var res = a + b;
    cb(res);
}
addAndCall(1, 2, function (num) {
    console.log("Num", num);
});
