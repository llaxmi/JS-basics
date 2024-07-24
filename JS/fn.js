//function as objects
var fnbody = "return a*a";
var fn = new Function("a", fnbody);
console.log(fn(5));

//Function as expression
var x = function u() {
  return "Tada";
};
console.log(x());

//Function as value
function asValue() {
  return "First define fn and then assign function to variable";
}
var z = asValue();
console.log(z);

//self invoking function
(function (a, b) {
  console.log("Self invoking function", a + b);
})(3, 2);

//built in functions
var y = new Function("a", "b", "return a+b");
console.log(y("Merry", "Dashain"));

//arrow fn
const add = (a, b) => {
  return "Arrow fn gives value " + a * b;
};
console.log(add(3, 20));

//generator function
function* gen() {
  yield "First";
  yield "Second";
  yield "Third";
}
let l = gen();
let b = l.next();
console.log(b);

console.log("NEXTTTTT");
//predefined
let evalx = 8;
let evaly = 9;
let evalz = 10;
console.log(eval(evalx + evaly)); //8 + 9 = 17 both numeric variables, eval function is then called with the number 17 as its argument.
console.log(eval("evalx + evaly")); // expression is string , it gets evalued
console.log(eval(evalz));
