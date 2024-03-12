function sum(a) {
    console.log(a);
}
sum("NABI");
function two(a, b) {
    console.log(a, b);
}
two("ZOHAN");
function fun(a, op, op1) {
    if (op === void 0) { op = "nabi"; }
    var op2 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        op2[_i - 3] = arguments[_i];
    }
    console.log(a, op, op1, op2);
}
fun("NABI");
fun("NABI", undefined, undefined, undefined, undefined);
