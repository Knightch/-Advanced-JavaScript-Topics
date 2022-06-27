// create a function sum
var sum = function (x, y) {
    return x + y;
}
//  create a function for multiply
var multi = function (x, y) {
    return x * y;
}

//  create a function for division
var div = function (x, y) {
    return x / y;
}
// create an another function
var run = function (fn, a, b) {
    console.log(`opretion of ${a} and ${b} is ${fn(a,b)}`);
}

// we call run function
run(sum, 8, 6);
run(multi, 8, 6);
run(div, 8, 6);
run(function (x, y) {
    return x - y;
}, 8, 6)